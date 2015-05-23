/**
 * Created by jour on 5/21/2015.
 */
var iPosition;

document.write("<ol>");
for (var iCounter = 0; iCounter < 31; iCounter++) {
    iPosition = iCounter + 1;
    document.write(" " +
    "<li>" + "This is " + iPosition + "</li>");

}
document.write("</ol>");

for ( iCounter=1; iCounter<= 23; iCounter++) {
    document.write(
        "<ul>" +
            "<li>" +
                "<ul>" +
                    "<li>X" + iCounter + "</li>" +
                    "<li>Y" + iCounter + "</li>" +
                    "<li>Z" + iCounter + "</li>" +
                "</ul>" +
            "</li>" +
        "</ul>" )
}

//document.write(
//    "<ul>" +
//        <X
//    "</ul>"
//)
//for (var iCounter=1; iCounter <= 23; iCounter++) {
//    document.write(
//        "<tr>" +
//            "<td>X" + iCounter + "</td>" +
//            "<td>Y" + iCounter + "</td>" +
//            "<td>Z" + iCounter + "</td>" +
//        "</tr>" +
//        "")
//}
