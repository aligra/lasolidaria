import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
        
function OrgSignForm() {
    return (
        <div>
                <h4 className="text-rose-400 text-2xl font-extrabold font-['League Spartan'] uppercase">
                    Información General
                </h4>
            <div className="flex-col m-4 gap-3">
                
                <form className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center items-center">
                        <InputText id="org-name" className="text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2" placeholder="Nombre de la organización"/>
                        <InputText id="representation" className="text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2" placeholder="Nombre del representante legal"/>
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <Dropdown className="w-full bg-white text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg" placeholder="Categoria"/>
                        <Dropdown className="w-full bg-white text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg" placeholder="Departamento" />
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                    <InputText id="email" className="w-2/3 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2" placeholder="Correo Electrónico"/>
                    <InputMask id="phone" mask="(503) 9999-9999" placeholder="Teléfono" className="w-1/3 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrgSignForm