import './HeaderBudget.css'



const HeaderBudget = () => {

return(
    <section className="layoutHeader borderLineTop">
  <div className='divBrand borderLine borderLineLeft  content '>KTM RC Garage</div>
  <div className='divPresupEmis  borderLineLeft borderLineRight borderLine content'>
  <p>
    Presupuesto n°: 220920006  
    </p>
    <p>
    Fecha de emisión: 27/09/2022                                                                   
    </p>
  </div>
  <div className='borderLineTop borderLineLeft  content-left'>Razón social: GOMEZ VICTOR DANIEL</div>
  <div className='borderLineTop  borderLineLeft borderLineRight content-left'>CUIT:  20375972027</div>
  <div className='borderLineTop borderLineLeft  content-left'>Dirección comercial: Larralde 1460 - Caseros, Buenos Aires</div>
  <div className='borderLineTop borderLineLeft borderLineRight  content-left'>Ingresos brutos: CM (902) 20375972027</div>
  <div className='borderLineTop borderLineLeft borderLineBottom content-left'>Condición frente a IVA: IVA RESPONSABLE INSCRIPTO</div>
  <div className='borderLineTop borderLineLeft borderLineRight borderLineBottom content-left'>Fecha de inicio de actividades: 01/10/2019</div>

</section>
)

}



export default HeaderBudget;