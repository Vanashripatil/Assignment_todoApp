
import { ColumnDirective, ColumnsDirective, GridComponent, Group, Sort, Inject, GroupSettingsModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';


const groupbyTable = ({results, selectgroup}) => {
     const groupOptions : GroupSettingsModel = {
        column: ['priority'],
      };


      return<div> <GridComponent  dataSource={results}  allowSorting={true} allowGrouping={true} groupSettings={() => groupOptions}  height={267}>
                 <ColumnsDirective>
                 <ColumnDirective field='title' headerText='title' width='150'/>
                 <ColumnDirective field='description' headerText='description' width='150'/>
                 <ColumnDirective field='createdat' headerText='createdat' width='150'/>
                 <ColumnDirective field='dueDate' headerText='dueDate' width='150'/>
                 <ColumnDirective field='selectedValue' headerText='priority' width='150'/>
                
             </ColumnsDirective>
              <Inject services={[Group, Sort]}/>
          </GridComponent ></div>
      
};

export default groupbyTable



