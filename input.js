import React from 'react';
export default function Infos (props)
{
return(
    
<div>
<form>
<input value={props.value} onChange={props.onChange}  type="text"  name="aa"/>  
</form>




</div>
)
}