define(['util/Util'],
  function(Util) {
    "use strict";
    
    function LocalVariableTable(attributeName, localVariableTable) {
      this.attributeName = attributeName;
      this.localVariableTable = localVariableTable;
    }

    //TODO: Flesh out attribute output.
    LocalVariableTable.prototype.toString = function() {
      return "\tLocalVariableTable: " + this.attributeName;
    };

    return LocalVariableTable;
  }
);