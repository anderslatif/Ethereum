












# Parliament

### This contract only allows known members to vote.Members are added through their public key by the contract owner.The contract owner is initially the original deployer but ownership rights can be handed over by the deployer or new owners.Members can have a varying amount of tokens = votes that they can use for each election.



## Functions



### Constant functions

#### members




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|[object Object]||members|


#### owner




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|address||owner|


#### proposals




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|index|uint|||


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|proposition|bytes32|||
|1|voteCount|uint|||


#### votingDeadline




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|uint||votingDeadline|






### State changing functions

#### addMember




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|targetMember|address|||
|1|memberName|string|||
|2|tokens|uint|||


#### getMember




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|targetMember|address|||


#### handOverOwnerShip




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|_newOwner|address|||


#### kill




##### Inputs

empty list


#### removeMember




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|targetMember|address|||


#### transferOwnership




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|newOwner|address|||


#### vote




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|proposal|uint8|||






### Events




### Enums




### Structs

#### Member




##### Params

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|name|string|||
|1|tokens|uint|||
|2|exists|bool|||


#### Proposal




##### Params

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|proposition|bytes32|||
|1|voteCount|uint|||




