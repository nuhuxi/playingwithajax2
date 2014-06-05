        $(document).ready(function(){
            $('#searchip').change(function(){
                var fromPage = $('#searchip').val();
                console.log(fromPage);
                $(document).ajaxSend(function(){
                        $('#loader').show();
                        console.log('Ajax send occured');
                });
                
                $(document).ajaxComplete(function(){
                        $('#loader').hide();
                        console.log('Ajax call completed!');
                });

                $.ajax({
                    type: 'GET',
                    url: 'server/playingwithajax.php',
                    data: 'ip=' + $('#searchip').val(),
                    success: function(msg){
                        $('#resultip').html(msg);
                    }
                }); //Ajax call
                
            });//event handler
        });//document.ready