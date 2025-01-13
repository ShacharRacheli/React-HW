export type User={
firstName?:string,
lastName?:string,
mail?:string,
password?:string,
address?:string,
phone?:string,
// id?:number
}
type Action={
    type:'Create'|'Delete'|'Update'
    data:Partial<User>
}

export const initialUser:User= {
    firstName: "",
    lastName:"",
    mail:"",
    password:"",
    address:"",
    phone:"",
    // id:0,
}
export const userReducer=(state:User,action:Action):User=>{
        const {firstName,lastName,password}=action.data as Partial<User>
        switch(action.type){
            case 'Create':
                return{
                firstName:firstName||'',
                lastName:lastName||'',
                password:password||'',
                // id:id||0,
                address:'',
                mail:'',
                phone:'',
                }
            case 'Update':

                return {
                    firstName:action.data.firstName||state.firstName,
                    password:action.data.password||state.password,
                    lastName:action.data.lastName||state.lastName,
                    mail:action.data.mail||state.mail,
                    address:action.data.address||state.address,
                    phone:action.data.phone||state.phone,
                    // id:action.data.id||state.id,                
                }

            // case 'Delete':
            default:
                return state
        }
}