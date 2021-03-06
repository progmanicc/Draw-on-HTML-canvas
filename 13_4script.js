function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
  
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
       
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      } // end for

      tbody.appendChild( row );
   } // end for

   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );
} // end function createCanvas

// processes the onmousemove event
function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      } // end if

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } // end if
       if(e.altKey)
           {
               e.target.setAttribute("class","white");
           }
       
   } // end if
} // end function processMouseMove

//after hitting erase button, drawing no longer works
function erase()
{
    var table = document.getElementsByTagName('table');
    var t =table[0].getElementsByTagName('td');
    for(var i = 0; i < t.length; ++i )
        {
            t[i].style.backgroundColor = 'white';
        }

}


