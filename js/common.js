var HTMLIndexHeader = "<h1>%header%<small> %sub%</small></h1>";
var HTMLPhoto = "<button data-toggle=\"modal\" data-target=\"#%mdl_name%\"style=\"background-image: url(%path%); padding: 0em;\" class=\"bgimg col-lg-4 col-md-4 col-xs-12 col-sm-12\"><div class=\"imgs\"><div style=\"height: auto;width: auto;bottom: 1em;position: absolute;\"><b>%title%</b><br><small>%date%</small><br>%desc%</div></div></button>";
var HTMLmodal = "<div class=\"modal fade\" id=\"%name%\" ><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"color: white; margin: 0.5em\">&times;</button><h2 class=\"text-center\">%title%</h2><h5 class=\"text-center\">%date%</h4></div><div class=\"modal-body\"><img src=\"%path%\" class=\"mdl img-responsive\"><h4 class=\"text-center\">%desc%<h4></div></div>/div></div>";
var HTMLproj = "<a style=\" padding:0.5em; \" href=\"%link%\" class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 cat text-center\" ><h3 style=\"position: absolute; top: 35%; left: 0; width: 100%; \">%title%</h3><img src=\"%path%\" class=\"img-circle\" style=\" width: 20em;height: 20em; margin: auto\"></a>";
var HTMLimg = " <img style=\"width:100%; height:auto; margin:10px;\" src=\"%path%\">";