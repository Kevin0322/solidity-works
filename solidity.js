console.log ("Hello world!")





//FIRST SOLIDITY SMART CONTRACT
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract helloworld {
    string public greet = "Hello world!";
}







//SECOND SOLIDITY SMART CONTRACT
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;
contract Storage {
    uint256 public number = 10;

    function store(uint256) public {
        number = 10;
    }
    function retrieve() public pure returns (uint256) {
        return 30;
    }
}






//THIRD SOLIDITY SMART CONTRACT
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Medicals{
    string public Procedure = "apendisectomy";


    function updateprocedure() public {
        Procedure = "apendisectomy";
    }


    function returnprocedure() public pure returns(string memory) {
            return "apendisectomy";
    }
}



//FOURTH SOLIDITY SMART CONTRACT
// SPDX-License-Identifier: MIT
