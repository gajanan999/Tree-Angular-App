import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treecomponent',
  templateUrl: './treecomponent.component.html',
  styleUrls: ['./treecomponent.component.scss']
})
export class TreecomponentComponent implements OnInit {

 // tree = [{name: "Node", nodes: []}];


 tree=[];
 inputValue='Node';

  delete = function(data) {
    data.nodes = [];
  };

  add = function(data) {
    var post = data.nodes.length + 1;
    var newName = data.name + '-' + post;
    data.nodes.push({'name': newName,nodes: []});
  };

  updateName=function(data,inputValue: string){
    data.name=inputValue;
  };


  constructor() { 
     this.tree = [{'name': "Node", nodes: []}];
  }

  ngOnInit() {
  }

}
