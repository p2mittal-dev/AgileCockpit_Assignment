<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;
use App\Repository\ISchoolRepository;
use Illuminate\Support\Facades\View;


class SchoolApiController extends Controller
{
	public $school;
	public function __construct(ISchoolRepository $school)
    {
        $this->school = $school;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $schools = $this->school->getAllSchools();
      return response() -> json(['status' => 200, 'schools' => $schools]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return View::make('school.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $collection = $request->all();
        $createSchool = $this->school->createSchool($collection);

        if($createSchool){
            return response()->json(["status" => 200]);
        }



    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
		$schools = $this->school->getSchoolById($id);
        return response()->json(['status' => 200, 'schools' => $schools]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


	 public function update(Request $request, $id)
    {
		$collection = $request->all();

		$updateSchool = $this->school->updateSchool($id, $collection);
        if($updateSchool){
            return response()->json(["status" => 200]);
        }
    }



    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */


	 public function destroy($id)
    {

		$deleteSchool = $this->school->deleteSchool($id);
        if($deleteSchool -> delete()){
            return response()->json(["status" => 200]);
        }
    }

}
