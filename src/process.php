<?php

echo 'PROCESSING...';

//check for get variable
if(isset($_GET['name'])){
    echo 'your name is: '. $_GET['name'];
    
}