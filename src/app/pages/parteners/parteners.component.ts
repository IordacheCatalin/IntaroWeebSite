import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerItem } from '../../Interfaces/BrokerItem.interface';
import { Banner } from '../home/banner/banner.component';


@Component({
  selector: 'app-parteners',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './parteners.component.html',
  styleUrl: './parteners.component.css'
})
export class BrokersComponent {
  protected readonly brokers: BrokerItem[] = [
    { name: '5MM BROKER DE ASIGURARE', logo: 'assets/Images/brokers/5mm.png' },
    { name: 'ACTIV ASIGURARI – BROKER DE ASIGURARE – REASIGURARE' },
    { name: 'ARPEMIX – CONSULT BROKER DE ASIGURARE', logo: 'assets/Images/brokers/arpemix.png' },
    { name: 'ASICONS BROKER DE ASIGURARE', logo: 'assets/Images/brokers/asicons.png' },
    { name: 'ASIMAR INSURANCE BROKER DE ASIGURARE REASIGURARE' },
    { name: 'ASIGEST BROKER DE ASIGURARE REASIGURARE' },
    { name: 'ATLANTIC BROKER GRUP BROKER DE ASIGURARE' },
    { name: 'AUST INSURANCE BROKER DE ASIGURARE', logo: 'assets/Images/brokers/aust-insurance.png' },
    { name: 'AXASIG BROKER DE ASIGURARE' },
    { name: 'BAVARIA BROKER DE ASIGURARE', logo: 'assets/Images/brokers/bavaria.png' },
    { name: 'BROKASIG BROKER DE ASIGURARE' },
    { name: 'BUSINESS BROKER – BROKER DE ASIGURARE', logo: 'assets/Images/brokers/business-broker.png' },
    { name: 'C.P.R. EVAL BROKER DE ASIGURARE' },
    { name: 'CAMPION BROKER DE ASIGURARE SI REASIGURARE', logo: 'assets/Images/brokers/campion.png' },
    { name: 'CONDOR BROKER DE ASIGURARE SI REASIGURARE' },
    { name: 'CONFISIO – BROKER DE ASIGURARE SRL' },
    { name: 'CONSILIUM BROKER DE ASIGURARE', logo: 'assets/Images/brokers/consilium.png' },
    { name: 'CONSULTANT AA BROKER DE ASIGURARE-REASIGURARE', logo: 'assets/Images/brokers/consultant-aa.png' },
    { name: 'CONTRACT ASIG BROKER DE ASIGURARE' },
    { name: 'DAW MANAGEMENT BROKER DE ASIGURARE', logo: 'assets/Images/brokers/daw.png' },
    { name: 'DELTA SRS BROKER DE ASIGURARE', logo: 'assets/Images/brokers/delta-srs.png' },
    { name: 'DESTINE BROKER DE ASIGURARE-REASIGURARE', logo: 'assets/Images/brokers/destine.png' },
    { name: 'DEXASIG BROKER DE ASIGURARE SRL' },
    { name: 'DOMAS INSURANCE BROKER DE ASIGURARE', logo: 'assets/Images/brokers/domas.png' },
    { name: 'EDEN PMB BROKER DE ASIGURARE' },
    { name: 'EK-BDP BROKER DE ASIGURARE REASIGURARE' },
    { name: 'ENERGO BROKER – BROKER DE ASIGURARE', logo: 'assets/Images/brokers/energo.png' },
    { name: 'EURIAL BROKER DE ASIGURARE', logo: 'assets/Images/brokers/eurial.png' },
    { name: 'EVEREST BROKER DE ASIGURARE', logo: 'assets/Images/brokers/everest.png' },
    { name: 'EXA BROKER DE ASIGURARE', logo: 'assets/Images/brokers/exa.png' },
    { name: 'EXE PREMIUM BROKER ASIGURARE – REASIGURARE' },
    { name: 'EXPERT BROKER DE ASIGURARE' },
    { name: 'FANBROK BROKER DE ASIGURARE REASIGURARE' },
    { name: 'FAST BROKERS DE ASIGURARE REASIGURARE', logo: 'assets/Images/brokers/fast-brokers.png' },
    { name: 'FILAS BROKER DE ASIGURARE' },
    { name: 'FINANCIAL SERVICES GRUP BROKER DE ASIGURARE', logo: 'assets/Images/brokers/fsg.png' },
    { name: 'FLY INSURANCE BROKER DE ASIGURARE REASIGURARE', logo: 'assets/Images/brokers/fly-insurance.png' },
    { name: 'FORUM INSURANCE' },
    { name: 'FREEDOM INSURANCE BROKER DE ASIGURARE' },
    { name: 'GELIAS BROKER DE ASIGURARE SRL' },
    { name: 'GENIUS INSURANCE BROKER' },
    { name: 'GEPA BROKER DE ASIGURARE SRL' },
    { name: 'GLOBAL ASSISTANCE BROKER DE ASIGURARE' }
  ];
}