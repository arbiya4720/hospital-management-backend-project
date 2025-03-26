import { Entity ,BaseEntity,PrimaryGeneratedColumn,Column,  Generated } from "typeorm";

@Entity({name:"Doctor"})
export class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn({name:"id"})
    @Generated('uuid')
    id:any

    @Column({name:"name",type:"varchar",length:100,default:null})
    name:any

    @Column({name:"departmentId",type:"int",default:null})
    departmentId:any

    @Column({name:"specialist",type:"varchar",length:100,default:null})
    specialist:any

    @Column({name:"qualifications",type:"text",default:null})
    qualifications:any

    @Column({name:"gender",type:"varchar",length:10,default:null})
    gender:any

    @Column({name:"contact",type:"varchar",length:10,default:null})
    contact:any

    @Column({name:"experience",type:"text",default:null})
    experience:any

    @Column({name:"fees",type:"decimal",default:null})
    fees:any

    @Column({name:"profile",type:"text",default:null})
    profile:any

    @Column({name:"email",type:"varchar",length:255,default:null})
    email:any

    @Column({name:"address",type:"text",default:null})
    address:any

    

    @Column({name:"availableDays",type:"text",array:true,default:[]})
    availableDays:any

    @Column({name:"isActive",type:"boolean",default:null})
    isActive:any

   

    @Column({name:"isVerified",type:"boolean",default:null})
    isVerified:any

    @Column({name:"password",type:"varchar",length:255,default:null})
    password:any

    @Column({name:"token",type:"varchar",length:255,default:null})
    token:any

    @Column({name:"createdAt",type:"timestamptz", default:()=>'CURRENT_TIMESTAMP'})
    createdAt:any

    @Column({name:"updatedAt",type:"timestamptz" ,default:()=>'CURRENT_TIMESTAMP'})
    updatedAt:any

}
