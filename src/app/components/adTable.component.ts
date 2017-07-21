import {Component} from '@angular/core'

@Component({
    selector : 'adTable',
    template : `
    <br><br><input type ='text' #search style="width:100%" (keyup)="0">
    <table *ngFor="let obj of arrayAdList | FilterPipe : search.value" border="1px">
               <tr>
     
    <td>{{obj.title}} </td>
    <td>{{obj.name}} </td>
    <td>{{obj.cate}} </td>
    <td>{{obj.desc}}</td><br>
    <td><a href="#"><input type="button" value="EDIT"></a></td><br>
    <td><a href="#"><input type="button" value="DELETE" (click)=ondelete(obj)></a></td><br>

    
 </tr> 
</table>`,
inputs: ['arrayAdList']

})

export class sampleTable{
 arrayAdList : any[];

 ondelete(obj1 : any){
    var index=this.arrayAdList.indexOf(obj1,0);
    if(index>-1){
        this.arrayAdList.splice(index,1);
    }
 }
}