
import { Request, Response } from 'express';
import Hour,{inthour} from '../models/Hour';
import  moment from "moment";
export const Save =async (req: Request, res: Response) => {
    //30/9/2019 18:25:36	Sep_2019	jhernandez@activeit.cl	CrediPymes Empresa	Apoyo en entrega de Desarrollo para instalación en ambiente de laboratorio, reunión de seguimiento, apoyo en ejecución de pruebas, validación de cargues y apoyo en los ajustes solicitados.	Colombia	Batch	54		Davivienda	Michel Tachack Suescun	30/9/2019	CrediPymes
    const dat=req.body;
    let nhour:inthour=new Hour();
    nhour.dateat=moment().format('LLL').toString(),
    nhour.fech=moment(dat.fech).format('LL'),
    nhour.email=dat.email,
    nhour.project=dat.project,
    nhour.description=dat.description,
    nhour.country=dat.country,
    nhour.area=dat.area,
    nhour.hoursg=dat.hoursg,
    nhour.files=dat.files,
    nhour.client=dat.client,
    nhour.personqr=dat.personqr,
    nhour.datexec=dat.datexec
    nhour.frente=dat.frente;
    const datarray = dat.cont;
    await nhour.save();
}
