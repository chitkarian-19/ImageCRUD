<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
   <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
   <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js" ></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>ImageCRUD</title>
</head>
<body>
        <div class="container">
            <div class="mt-2">
              </div>

            <div class="modal" id="modal1"><div class="modal-dialog"><div class="modal-content">
             
            <!---Modal Header --->
            <div class="modal-header">
               <h2 class="modal-title text-center " style="margin-left:40%;" >Add User</h2>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
     
              <!--- -->
              <div class="modal-body">
            <div id="usercreation" class=" p-5 m-2">
             <form method="POST" enctype="multipart/form-data">
              <div class="form-group">
                  <label for="uname " class="font-weight-normal" style="font-size:18px;">Enter Name</label>
                  <input type="text" class="form-control border border-dark" id="uname" placeholder="username">
                  <p id="error_uname" class="text-danger">*Name is required</p>
              </div>
              <div class="form-group">
                   <label for="email" class="font-weight-normal">Enter MailID</label>
                   <input type="text" class="form-control border border-dark" id="mailID" placeholder="s123@gm.com">
                   <p id="error_mailID" class="text-danger">*EmailID is required</p>
              </div>
              <div class="form-group">
               <label for="post" class="font-weight-normal">Select Post</label>
                <select class="form-control border border-dark" id="post">
                  <option>Post 1</option>
                  <option>Post 2</option>
                  <option>Post 3</option>
                  <option>Post 4</option>
                </select>
              </div>
              <div class="form-group">
                <label for="image " class="font-wieght-normal">Select Picture</label>
                {{ csrf_field() }}
                <input type="file" id="photo" class="font-weight-normal ">
                <p id="error_photo" class="text-danger">*Photo is required</p>
              </div>
              <button class="btn btn-primary" id="create">Create User</button>
              </form>
            </div>
            </div>


            </div></div></div>

            <div class="modal" id="modal2">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  <h2 class="modal-title" style="margin-left:30%;">Update User</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>



                  </div>
                  <div class="modal-body">
                    <img src="/storage/images/1.jpeg" width=100 height=100 class="img-fluid" id="up-img">
            <div id="userupdation" class="  ">
             <form method="POST" enctype="multipart/form-data">
             <input type="text" id="uid" style="display:none;">
              <div class="form-group">
                  <label for="uname" class=" font-weight-normal">Enter Name</label>
                  <input type="text" class="form-control border border-dark" id="old_name" placeholder="username">
                  <p id="error_old_name" class="text-danger">*Name is required</p>
              </div>
              <div class="form-group">
                   <label for="email" class="font-weight-normal">Enter MailID</label>
                   <input type="text" class="form-control border border-dark" id="old_mailID" placeholder="s123@gm.com">
                   <p id="error_old_mailID" class="text-danger">*Email is required</p>  
             </div>
              <div class="form-group">
               <label for="post" class="font-weight-normal">Select Post</label>
                <select class="form-control border border-dark" id="old_post">
                  <option>Post 1</option>
                  <option>Post 2</option>
                  <option>Post 3</option>
                  <option>Post 4</option>
                </select>
              </div>
              <div class="form-group">
                <label for="image" class="font-weight-normal">Select Picture</label>
                {{ csrf_field() }}
                <br>
                <input type="file" id="old_photo" class=" font-weight-normal" >
                <p id="error_old_photo" class="text-danger">*Select Photo</p>
              </div>
              <button class="btn btn-primary float-right" id="update">Update</button>
              </form>
            </div>
                </div>
              </div>
            </div>
          </div>
            
          
             <div class="mt-1 jumbotron shadow-lg p-3 mb-5 bg-white rounded">
              
            <button class="btn btn-success mb-2" style="margin-left:90%;" id="addBtn" data-toggle="modal" data-target="#modal1">Add User</button>
            
             
              <div  id="menu-2">
                  
              </div>
            </div>
        </div>
</body>
     <script src="{{ asset('js/custom.js') }}"></script>
</html>