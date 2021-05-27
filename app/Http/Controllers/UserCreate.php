<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class UserCreate extends Controller
{
    //
    public function create(Request $request){
      
       //store into local storage
        $fileName = ($request->file('photo')->getClientOriginalName());
        $request->file('photo')->move(public_path()."/storage/images/", $fileName);
      
         $name=$request->input('name');
         $email=$request->input('email');
         $post=$request->input('post');
          DB::insert('insert into users (name,email,post,image) values (?,?,?,?) ',[$name,$email,$post,$fileName] );
        return json_encode($fileName);
        //return json_encode(json_decode($request));
    }
    public function read(){
        $results = DB::select('select id,name,email,post,image from users');
        return (json_encode($results));
    }
    public function delete(Request $request){
        $id = $request->input('id');
        DB::delete('delete from users where id = ?',[$id]);
        return json_encode('Deletion Successful');
    }
    public function update(Request $request){
        $fileName = ($request->file('photo')->getClientOriginalName());
        $request->file('photo')->move(public_path()."/storage/images/", $fileName);
         $name=$request->input('name');
         $email=$request->input('mailID');
         $post=$request->input('post');
         $id=$request->input('id');
          try{
         DB::update('update users set name = ? , email = ?, post = ?, image = ? where id = ?',[$name,$email,$post,$fileName,$id]);
         return json_encode("updation successful"); 
          }
          catch(Exception $e){
              return json_encode($e->getMessage());
          } 
      }
}

