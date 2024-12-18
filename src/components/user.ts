export type User={
firstName?:string,
lastName?:string,
mail?:string,
password?:string,
address?:string,
phone?:string
}
type Action={
    type:'Create'|'Delete'|'Update'
    data:Partial<User>
}

export const initialUser:User= {
    firstName: "racheli",
    lastName:"",
    mail:"",
    password:"1234",
    address:"",
    phone:""
}
export const userReducer=(
    state:User,action:Action):User=>{
        const {firstName,lastName,password}=action.data as Partial<User>
        switch(action.type){
            case 'Create':
                state.firstName=firstName,
                state.lastName=lastName,
                state.password=password
                return state
            case 'Update':
                return {
                    firstName:action.data.firstName||state.firstName,
                    password:action.data.password||state.password,
                    lastName:action.data.firstName||state.lastName,
                    mail:action.data.mail||state.mail,
                    address:action.data.address||state.address,
                    phone:action.data.phone||state.phone                
                }

            // case 'Delete':
            default:
                return state
        }
}