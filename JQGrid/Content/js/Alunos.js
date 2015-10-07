
jQuery("#navgrid").jqGrid({
    url: 'Alunos/',
    datatype: "json",
    //colNames: ['Matrícula', 'Nome', 'Idade'],
    //colModel: [
   	//	{ name: 'AlunoId', index: 'AlunoId', width: 55, editable: false, editoptions: { readonly: true, size: 10 } },
   	//	{ name: 'Nome', index: 'Nome', width: 80, editable: true, editoptions: { size: 10 } },
   	//	{ name: 'Idade', index: 'Idade', width: 90, editable: true, editoptions: { size: 25 } }
    //],
    colNames: ['Active', 'Active', 'Default', 'Default', 'Upload', 'UploadTwo'],
    colModel: [
    {name:'active', align:'center', hidden:true, editable:true, edittype:'select',
        editoptions:{value:'Yes:Yes;No:No'}, defval:'Yes', editrules:{edithidden:true, searchhidden:true}, width:80 },
    {name:'activeimage', align:'center', sortable:false, search:false, editable:false, width:80 },
    {name:'default', align:'center', hidden:true, editable:true, edittype:'select',
        editoptions:{value:'Yes:Yes;No:No'}, editrules:{edithidden:true, searchhidden:true}, width:80 },
    { name: 'defaultimage', align: 'center', sortable: false, search: false, editable: false, width: 80 },
    { name: 'File', align: 'center', sortable: false, search: false, editable: false, width: 80 },
    {
        name: 'FileTwo', align: 'center', hidden: true, editable: true, edittype: 'file', custom:true,
        editrules: { edithidden: true}, editoptions:{enctype: "multipart/form-data"}, width: 80
    }
    ],
    rowNum: 10,
    rowList: [10, 20, 30],
    pager: '#pagernav',
    sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption: "",
    editurl: "someurl.php",
    height: 300,
    width: 300
});
var addprm = {
    width: 450,
    height: 200,
    top: 125,
    left: 50,
    reloadAfterSubmit: true,
    closeAfterAdd: true
};


$("#navgrid").navGrid('#pagernav', {
    add: true, addtext: 'Add', edit: true, edittext: 'Edit', del: true,
    deltext: 'Delete', search: false, refresh: true
},
 //editprm, // edit
 addprm // add
 //delprm // delete
 );


//jQuery("#navgrid").jqGrid('navGrid', '#pagernav',
//{}, //options
//{ height: 300, reloadAfterSubmit: false }, // edit options
//{ height: 300, reloadAfterSubmit: false }, // add options
//{ reloadAfterSubmit: false }, // del options
//{} // search options
//);