












# OpenElection

### OwnableBase contract with an owner.Provides onlyOwner modifier, which prevents function from running if it is called by anyone other than the owner.



## Functions



### Constant functions

#### getProposalDescription




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|_proposalDescription|string|||


#### getResults




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|param0|bytes32|||
|1|param1|uint|||


#### numProposals




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|uint||numProposals|


#### owner




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|address||owner|


#### proposalDescription




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|string||proposalDescription|


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


#### stringToBytes32




##### Inputs

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|source|string|||


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|result|bytes32|||


#### voters




##### Inputs

empty list


##### Returns

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|return0|[object Object]||voters|






### State changing functions

#### kill




##### Inputs

empty list


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

#### Voted




##### Params

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|proposalID|uint|||
|1|position|bool|||
|2|voter|address|||





### Enums




### Structs

#### Voter




##### Params

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|weight|uint|||
|1|voted|bool|||
|2|delegate|address|||


#### Proposal




##### Params

|#  |Param|Type|TypeHint|Description|
|---|-----|----|--------|-----------|
|0|proposition|bytes32|||
|1|voteCount|uint|||




