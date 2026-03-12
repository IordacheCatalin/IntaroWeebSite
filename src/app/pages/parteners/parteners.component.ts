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
    { name: '5MM BROKER DE ASIGURARE', logo: '' },
    { name: 'ACTIV ASIGURARI – BROKER DE ASIGURARE – REASIGURARE' },
    { name: 'ARPEMIX – CONSULT BROKER DE ASIGURARE', logo: '../../assets/Broker/arpemix.jpg' },

    { name: 'ASICONS BROKER DE ASIGURARE', logo: '../../assets/Broker/asicons.png' },

    { name: 'ASIMAR INSURANCE BROKER DE ASIGURARE REASIGURARE' },

    { name: 'ASIGEST BROKER DE ASIGURARE REASIGURARE' },

    { name: 'ATLANTIC BROKER GRUP BROKER DE ASIGURARE' },

    { name: 'AUST INSURANCE BROKER DE ASIGURARE', logo: '../../assets/Broker/aust.png' },

    { name: 'AXASIG BROKER DE ASIGURARE' },

    { name: 'BAVARIA BROKER DE ASIGURARE', logo: '../../assets/Broker/bavaria.jpg' },

    { name: 'BROKASIG BROKER DE ASIGURARE' },

    { name: 'BUSINESS BROKER – BROKER DE ASIGURARE=', logo: '../../assets/Broker/businessbroker.jpg' },

    { name: 'C.P.R. EVAL BROKER DE ASIGURARE' },

    { name: 'CAMPION BROKER DE ASIGURARE SI REASIGURARE', logo: '../../assets/Broker/campion.png' },

    { name: 'CONDOR BROKER DE ASIGURARE SI REASIGURARE' },

    { name: 'CONFISIO – BROKER DE ASIGURARE SRL' },

    { name: 'CONSILIUM BROKER DE ASIGURARE', logo: '../../assets/Broker/consilium.jpg' },

    { name: 'CONSULTANT AA BROKER DE ASIGURARE-REASIGURARE', logo: '../../assets/Broker/consultantaa.jpg' },

    { name: 'CONTRACT ASIG BROKER DE ASIGURARE' },

    { name: 'DAW MANAGEMENT BROKER DE ASIGURARE', logo: '../../assets/Broker/dawmanagement.jpg' },

    { name: 'DELTA SRS BROKER DE ASIGURARE', logo: '../../assets/Broker/deltasrs.jpg' },

    { name: 'DESTINE BROKER DE ASIGURARE-REASIGURARE', logo: '../../assets/Broker/destine.png' },

    { name: 'DEXASIG BROKER DE ASIGURARE SRL' },

    { name: 'DOMAS INSURANCE BROKER DE ASIGURARE', logo: '../../assets/Broker/domas.png' },

    { name: 'EDEN PMB BROKER DE ASIGURARE' },

    { name: 'EK-BDP BROKER DE ASIGURARE REASIGURARE' },

    { name: 'ENERGO BROKER – BROKER DE ASIGURARE', logo: '../../assets/Broker/energo.png' },

    { name: 'EURIAL BROKER DE ASIGURARE', logo: '../../assets/Broker/eurialbroker.png' },

    { name: 'EVEREST BROKER DE ASIGURARE', logo: '../../assets/Broker/everest.png' },

    { name: 'EXA BROKER DE ASIGURARE', logo: '../../assets/Broker/exa.png' },

    { name: 'EXE PREMIUM BROKER ASIGURARE – REASIGURARE' },

    { name: 'EXPERT BROKER DE ASIGURARE' },

    { name: 'FABRICA DE ASIGURARI BROKER DE ASIGURARE' },

    { name: 'FANBROK BROKER DE ASIGURARE REASIGURARE' },

    { name: 'FAST BROKERS DE ASIGURARE REASIGURARE', logo: '../../assets/Broker/fast.png' },

    { name: 'FILAS BROKER DE ASIGURARE' },

    { name: 'FINANCIAL SERVICES GRUP BROKER DE ASIGURARE', logo: '../../assets/Broker/fsg.png' },

    { name: 'FLY INSURANCE BROKER DE ASIGURARE REASIGURARE', logo: '../../assets/Broker/fly.png' },

    { name: 'FORUM INSURANCE' },

    { name: 'FREEDOM INSURANCE BROKER DE ASIGURARE' },

    { name: 'GELIAS BROKER DE ASIGURARE SRL' },

    { name: 'GENIUS INSURANCE BROKER' },

    { name: 'GEPA BROKER DE ASIGURARE SRL' },

    { name: 'GLOBAL ASSISTANCE BROKER DE ASIGURARE' },

    { name: 'GLOBAL RISKS SERVICES' },

    { name: 'GLOBASIG BROKER DE ASIGURARE REASIGURARE' },

    { name: 'GT BROKER DE ASIGURARE' },

    { name: 'HERMANNSTADT BROKER DE ASIGURARE-REASIGURARE' },

    { name: 'HOBBIT BROKER DE ASIGURARE REASIGURARE' },

    { name: 'IMOSIG BROKER DE ASIGURARE' },

    { name: 'INK CONSULTANTA – BROKER DE ASIGURARE' },

    { name: 'INTEGRA BROKER DE ASIGURARE', logo: '../../assets/Broker/integra.png' },

    { name: 'INTER BROKER DE ASIGURARE', logo: '../../assets/Broker/inter.png' },

    { name: 'INTERBUG INSURANCE BROKER DE ASIGURARE' },

    { name: 'KLAUSENBURG BROKER DE ASIGURARE' },

    { name: 'KRON-ASIG BROKER DE ASIGURARE' },

    { name: 'KUNDEN BROKER DE ASIGURARE' },

    { name: 'LION BROKER DE ASIGURARE' },

    { name: 'LOYALTY INSURANCE AND REINSURANCE BROKER', logo: '../../assets/Broker/loyalty.png' },

    { name: 'MARSH BROKER DE ASIGURARE REASIGURARE' },

    { name: 'MAXYGO BROKER DE ASIGURARE' },

    { name: 'MILLENIUM INSURANCE BROKER (MIB) SA', logo: '../../assets/Broker/mib.png' },

    { name: 'MIRA SOLUTIONS BROKER DE ASIGURARE REASIGURARE', logo: '../../assets/Broker/mira.png' },

    { name: 'NEW AGE INSURANCE BROKER' },

    { name: 'OBSIDIAN BROKER ASIGURARE-REASIGURARE' },

    { name: 'OTTO BROKER DE ASIGURARE' },

    { name: 'OXYGEN EXPRESS BROKER DE ASIGURARE – REASIGURARE' },

    { name: 'PERSONAL BROKER' },

    { name: 'PINT.RO BROKER DE ASIGURARE', logo: '../../assets/Broker/pint.png' },

    { name: 'PRESTIGE INSURANCE BROKER DE ASIGURARE' },

    { name: 'PRIVAT CONSULTING BROKER DE ASIGURARE REASIGURARE' },

    { name: 'PROFESSIONAL BROKER DE ASIGURARE' },

    { name: 'PROXIMUS BROKER DE ASIGURARE' },

    { name: 'PSG INSURANCE BROKER' },

    { name: 'QUARTZ-ASIG BROKER DE ASIGURARE', logo: '../../assets/Broker/quartz.png' },

    { name: 'RENOMIA SRBA INSURANCE BROKER' },

    { name: 'RISC TOTAL ASIG – BROKER DE ASIGURARE' },

    { name: 'RISK CONTROL INSURANCE AND REINSURANCE BROKER' },

    { name: 'RISK MANAGEMENT GRUP BROKER DE ASIGURARE' },

    { name: 'RITTER BROKER DE ASIGURARE SI REASIGURARE', logo: '../../assets/Broker/ritter.png' },

    { name: 'ROMASIG BROKER DE ASIGURARE' },


    { name: 'SAFE INVEST BROKER DE ASIGURARE', logo: '../../assets/Broker/saveinvest.png' },

    { name: 'SAFETY BROKER SE ASIGURARE' },

    { name: 'STAR BROKER DE ASIGURARE', logo: '../../assets/Broker/starbroker.png' },

    { name: 'START BROKER DE BROKER DE ASIGURARE REASIGURARE' },

    { name: 'STELLAR RE INTERMEDIARIES', logo: '../../assets/Broker/stellar.png' },

    { name: 'TITAN BROKER DE ASIGURARE' },

    { name: 'TRANSILVANIA BROKER DE ASIGURARE SA' },

    { name: 'TRUST BROKERS BROKER DE ASIGURARE' },

    { name: 'VECTOR BROKER DE ASIGURARE – REASIGURARE', logo: '../../assets/Broker/vector.png' },

    { name: 'VERASIG BROKER DE ASIGURARE', logo: '../../assets/Broker/verasig-300x92.png' },

    { name: 'VERTICAL ASSURANCE BROKER DE ASIGURARE REASIGURARE' },

    { name: 'VITAL BROKER DE ASIGURARE' },

    { name: 'VS COMPANY BROKER DE ASIGURARE' }
  ];
}