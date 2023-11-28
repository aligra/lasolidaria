import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
        
function OrgLoginForm() {
    return (
        <div>
            <div className="flex flex-column gap-2">
                <label htmlFor="username" className="text-zinc-700 text-sm font-light font-['Poiret One']">Correo Electrónico</label>
                <InputText id="email" className="shadow-lg"/>
                <label htmlFor="password" className="text-zinc-700 text-sm font-light font-['Poiret One']">Contraseña</label>
                <InputText id="password" className="shadow-lg"/>
                <Button label="INGRESAR" className="font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2 m-4" />
            </div>
        </div>
    )
}

export default OrgLoginForm