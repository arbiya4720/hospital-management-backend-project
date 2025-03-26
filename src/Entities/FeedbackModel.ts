import { Entity ,BaseEntity,PrimaryGeneratedColumn,Column,  Generated } from "typeorm";

@Entity({name:"Feedback"})
export class Feedback extends BaseEntity{
    @PrimaryGeneratedColumn({name:"id"})
     @Generated("uuid")
    id:any

    @Column({name:"patientId",type:"int",default:null})
    patientId:any

    @Column({name:"rating",type:"int",default:null})
    rating:any

    @Column({name:"doctorId",type:"int",default:null})
    doctorId:any

    @Column({name:"createdAt",type:"timestamptz", default:()=>'CURRENT_TIMESTAMP'})
            createdAt:any
        
            @Column({name:"updatedAt",type:"timestamptz",default:()=>'CURRENT_TIMESTAMP'})
            updatedAt:any
    }
