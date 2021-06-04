<?php
namespace App\Repository;

use App\Models\School;
use App\Repository\ISchoolRepository;

class SchoolRepository implements ISchoolRepository
{
    protected $school = null;
    public function getAllschools()
    {
		    $schools = School::orderBy('updated_at', 'DESC')->get();
		    return $schools;
    }
    public function getSchoolById($id)
    {
      $school = School::find($id);
      return $school;
    }
    public function createSchool($collection = [])
    {
        $school = new School;
        $school->name = $collection['name'];
        $school->email = $collection['email'];
        $school->mobile = $collection['mobile'];
        $school->username = $collection['username'];
        $school->address = $collection['address'];
        $school->is_active = 1;
        $school->save();
		return true;
    }
	public function updateSchool($id, $collection = [])
    {		
  		$school = School::find($id);
  		$school->name = is_null($collection['name']) ? $collection['name'] : $collection['name'];
  		$school->email = is_null($collection['email']) ? $collection['email'] : $collection['email'];
  		$school->mobile = is_null($collection['mobile']) ? $collection['mobile'] : $collection['mobile'];
  		$school->username = is_null($collection['username']) ? $collection['username'] : $collection['username'];
  		$school->address = is_null($collection['address']) ? $collection['address'] : $collection['address'];
  		$school->is_active = 1;
  		$school->save();
  		return true;
    }
    public function deleteSchool($id){
		$school = School::find($id);
		return $school;
    }
}
