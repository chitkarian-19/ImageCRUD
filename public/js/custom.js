$("document").ready(()=>{
      
    read();
    $("#error_old_photo").css("display","none");
    $("#error_old_name").css("display","none");
    $("#error_old_mailID").css("display","none");
    $("#error_uname").css("display","none");
    $("#error_mailID").css("display","none");
    $("#error_photo").css("display","none");
    $("#uname").keyup(()=>{
      if($("#uname").val()==""){
        $("#error_uname").css("display","block");
      }
      else{
        $("#error_uname").css("display","none");
      }
    });
    $("#mailID").keyup(()=>{
      if($("#mailID").val()==""){
        $("#error_mailID").css("display","block");
      }
      else{
        $("#error_mailID").css("display","none");
      }
    });
    $("#old_name").keyup(()=>{
      if($("#old_name").val()==""){
        $("#error_old_name").css("display","block");
      }
      else{
        $("#error_old_name").css("display","none");
      }
    });
    $("#old_mailID").keyup(()=>{
      if($("#old_mailID").val()==""){
        $("#error_old_mailID").css("display","block");
      }
      else{
        $("#error_old_mailID").css("display","none");
      }
    });
    




    function deleteUser() {
        alert("hello delete User");
        


    }
    function read(){
        /**Display a list of users */
       $.ajaxSetup({
        headers:{
                'X-CSRF-TOKEN':$("meta[name='csrf-token']").attr('content')
          }
        });

        $.ajax({
          url:'read',
          type:'GET',
          dataType:'json',
          success:(data)=>{
                  var ulist= JSON.parse(JSON.stringify(data));
                  console.log(ulist);


                  /**********************************/
                  var super_parent = $("#menu-2");
                  $("#myTable").remove();//remove the table
                  super_parent.empty();  //empty the parent
                  
                  var child=super_parent.append("<table id='myTable'></table>");
                  $("#myTable").addClass("table   table-fluid table-striped");
                  $("#myTable").append("<thead><tr><th>ID</th><th>Name</th> <th>Email</th><th>Post</th><th>Image</th><th>Edit</th></thead>");
                  $("#myTable").append("<tbody id='table-body'></tbody>");
                  //var parent = $("#table-body");
                  //console.log($('#myTable'));
                 
                  
                  //$('table').DataTable().clear().draw();
                 // parent.empty();
                // var table = $('table#myTable').DataTable();
                 var cnt=0;
                  ulist.forEach(function(e){ 	
                     //* table.row.add([e.id,e.name,e.email,e.post,e.image]).draw(false);
                     
                     var src = 'storage/images/'+e.image;
                     $('table#myTable').append('<tr ><td>'+e.id+'</td><td>'+e.name+'</td><td>'+e.email+'</td><td>'+e.post+'</td><td><img width="80" height="80" src='+src+'></img></td><td><button data-toggle="modal" data-target="#modal2" class="btn btn-info mr-2" id="u'+cnt+'">Update</button><button  class="btn btn-danger" id="'+cnt+'" >Delete</button></td></tr>');
                     var e="#"+cnt;
                     var e1 = "#u"+cnt;
                     $(e).click(()=>{
                      
                     $.ajaxSetup({
                      headers:{
                              'X-CSRF-TOKEN':$("meta[name='csrf-token']").attr('content')
                        }
                      });
                      var data=new FormData();
                        
                      console.log($(e).parent().parent().children().first().html());
                      data.append('id',$(e).parent().parent().children().first().html());
          
                  $.ajax({
                     url:'delete',
                     method:'POST',
                     dataType:'json',
                     processData: false,
                     contentType: false,
                     data:data,
                     success:(data)=>{
                          console.log(JSON.stringify(data));
                          read();
                     },
                     error:(err)=>{
                          console.log(JSON.stringify(err));
                     }
                  });
                    

                      });
                     $(e1).click(()=>{
                      console.log($(e1).parent().parent().children());
                        //set the form Data first
                           var arr = $(e1).parent().parent().children();
                           arr.each((i,ele)=>{
                               switch(i){
                                   case 0: $("#uid").val($(ele).html());
                                           break;
                                   case 1: $("#old_name").val($(ele).html());
                                           break;
                                   case 2: $("#old_mailID").val($(ele).html());
                                           break;
                                   case 3: $("#old_post").val($(ele).html());
                                           break;
                                   case 4:  { var src = $($(ele).html()).attr('src');
                                               console.log(src);
                                             $("#up-img").attr("src",src);
                                            };
                                           break;
                                   default:break;
                               }
                           });
                      
                     });

                     cnt++;
                  });
                 


                  /*************************** */
          },
          error:(err)=>{
                 console.log(JSON.stringify(err)); 
          }
        });
    }
    $("#old_photo").change((e)=>{
        console.log(e.target.files[0].name);
        $("#up-img").attr("src",'storage/images/'+e.target.files[0].name);
    });
     $("#update").click((e)=>{
        e.preventDefault();
        $.ajaxSetup({
            headers:{
                    'X-CSRF-TOKEN':$("meta[name='csrf-token']").attr('content')
              }
            });
            var data=new FormData();
            
          
            data.append('id',$("#uid").val());
            data.append('name',$("#old_name").val());
            data.append('mailID',$("#old_mailID").val());
            data.append('post',$("#old_post").val());
            data.append('photo',$("#old_photo").prop('files')[0]);
             var err_flag=0;
            if($("#old_name").val()==""){
                 err_flag=1;
                 $("#error_old_name").css('display','block');
            }
            else{
              $("#error_old_name").css('display','none');
            }
            if($("#old_mailID").val()==""){
               err_flag=1;
               $("#error_old_mailID").css('display','block');
            }
            else{
              $("#error_old_mailID").css('display','none');
            }
            if($("#old_photo").val()==""){
              err_flag=1;
              $("#error_old_photo").css('display','block');
            }
            else{
              $("#error_old_photo").css('display','none');
            }

            if(err_flag==1)
             return false;






        $.ajax({
           url:'update',
           method:'POST',
           dataType:'json',
           processData: false,
           contentType: false,
           data:data,
           success:(data)=>{
                console.log(JSON.stringify(data));
                $("#userupdation").prepend("<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong> User Succesfully updated.</div>");
                $("#uid").val("");
                $("#old_name").val("");
                $("#old_mailID").val("");
                $("#old_post").val("");
                $("#old_photo").val("");
                
                
                
                read();
           },
           error:(err)=>{
                console.log(JSON.stringify(err));
           }
        });



     });
   




    //$("#addBtn").click(()=>{
      //  $("#usercreation").slideDown("slow");
    //});
    var userfile;
    $("#photo").change((e)=>{
        userfile =e.target.files[0];
    })
    $("#create").click((e)=>{
            e.preventDefault();
            var formData = new FormData();
            formData.append('name',$("#uname").val());
            formData.append('email',$("#mailID").val());
            formData.append('post',$("#post").val());
            formData.append('photo',$("#photo").prop('files')[0]);
            console.log(formData.entries());
            var err_flag=0;
                if($("#uname").val()==""){
                     err_flag=1;
                     $("#error_uname").css("display","block");
                }
                else{
                  $("#error_uname").css("display","none");
                } 

                if($("#mailID").val()==""){
                  err_flag=1;
                     $("#error_mailID").css("display","block");
                }
                else{
                  $("#error_mailID").css("display","none");
                }

                if($("#photo").val()==""){
                  err_flag=1;
                     $("#error_photo").css("display","block");
                }
                else{
                 
                  $("#error_photo").css("display","none");
                }

                if(err_flag==1){
                  return false;
                }





            $.ajaxSetup({
                headers:{
                        'X-CSRF-TOKEN':$("meta[name='csrf-token']").attr('content')
                  }
                });
                 // console.log($("meta[name='csrf-token']").attr('content'));
               
               
                 $.ajax({
                 url:'create',
                 method:"POST",
                 dataType:'multipart/form-data',
                 data:formData,
                 processData: false,  //preventing the form, from getting converted the form into string
                 contentType: false,
                 dataType:'JSON',
                 cache: false,
                 success:(response)=>{
                  console.log("success"+JSON.stringify(response));  
                  $("#usercreation").prepend("<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong> User Succesfully created.</div>");
                  $("#uname").val("");
                  $("#mailID").val("");
                  $("#post").val("");
                  $("#photo").val("");
                  read();
                },
                 error:(err)=>{
                      console.log("error"+JSON.stringify(err));
                 },
                 complete:()=>{
                     console.log("API HITTED Successfully");
                 }
                });
    });
})