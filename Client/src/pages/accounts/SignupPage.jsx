import { TabView, TabPanel } from 'primereact/tabview';
import OrgSignForm from '../../components/forms/OrgSignForm';
import UserSignForm from '../../components/forms/UserSignForm';

function SignupPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    UNETE
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Crea una cuenta para unirte a la plataforma y llevar tu causa a más personas. 
                    Permitenos ayudarte para que sigas ayudando.
                </p>
            </div>

            <div className="flex justify-center items-center m-2">
                <TabView>
                    <TabPanel header="ORGANIZACION" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <OrgSignForm />                    
                    </TabPanel>
                    <TabPanel header="PARTICULAR" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <UserSignForm />
                    </TabPanel>
                </TabView>
            </div>
        
        </>
    )
}

export default SignupPage