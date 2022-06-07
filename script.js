jQuery(document).ready(function () {
          //$('.todo button.add').click(function()
          $('.todo').on('click', 'button.add',function(){
            let task = $('.todo .new-task').val()
            $('.todo ul').append(
                '<li>\n' +
                '<div class="center">\n'+
                '<input type="checkbox" class="checkbox">\n'+
                '<span>'+ task +'</span>\n' +
                '</div>\n' +
                '<div class="flex_lol">\n' +
                '<button class="delete-task btn"><i class="fa fa-trash"></i></button>\n' +
                '</div>\n' +
                '</li>')
          })

          $('.todo').on('click','input[type=checkbox]',function(){
              $(this).closest('li').find('span').toggleClass('completed')
          })

          $('.todo').on('click','button.delete-task',function(){
            $(this).closest('li').remove()
        })
})

