<?php 

namespace App\Repository;

interface ISchoolRepository 
{
    public function getAllSchools();
    public function getSchoolById($id);
    public function createSchool($collection = [] );
    public function updateSchool($id, $collection = [] );
    public function deleteSchool($id);

}