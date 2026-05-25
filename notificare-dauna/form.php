<?php
require_once('./shared/header.php');
?>
    <div class="container-fluname">
        <div  style="align-items: flex-end; display: flex;">
            <div class="col-sm-4">
                <a href="/" class="btn btn-default" style="width: 200px; margin-left: 135px; margin-bottom: 15px;">
                    <i class="glyphicon glyphicon-home"></i> Acasa
                </a>
            </div>
            <div class="col-sm-4" style="display: flex; justify-content: center; padding: 50px 0 35px 0;">
                <img src="./public/logo-mare-watford-e1528208651497.png" class="img-responsive logo"
                     onclick="location.pathname = '/index.php';">
            </div>
        </div>
    </div>
    <div class="container-fluname custom-container">
        <form onsubmit="App.actions.formSubmit()" id="form">
            <!--- pas1insert-->
            <div class="row title" id="step1title">
                <div class="panel-default panel ">
                    <div class="panel-body" id="titlepas1">
                        Pas 1/6 Date despre persoana care notifica dauna
                    </div>
                </div>
            </div>
            <div class="row content" id="step1content">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="insurant_information/person_type">Calitatea persoanei care face notificarea:</label>
                        <select class="form-control" name="insurant_information/person_type" required="required">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Asigurat">Asigurat</option>
                            <option value="Reprezentant asigurat">Reprezentant asigurat</option>
                            <option value="Pagubit">Pagubit</option>
                            <option value="Reprezentant pagubit">Reprezentant pagubit</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="insurant_information/notification_reason">Motivul notificarii:</label>
                        <select class="form-control" name="insurant_information/notification_reason">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Decontare directa">Decontare directa</option>
                            <option value="Eliberare Document de Intrare in Reparatie">Eliberare Document de Intrare in
                                Reparatie
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="insurant_information/firstname">Nume:</label>
                        <input placeholder="Nume" name="insurant_information/firstname" type="text"
                               class="form-control" required="required">
                    </div>
                    <div class="form-group">
                        <label for="insurant_information/lastname">Prenume:</label>
                        <input placeholder="Prenume" name="insurant_information/lastname" type="text"
                               class="form-control" required="required">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="insurant_information/CNP">CNP:</label>
                        <input placeholder="CNP" name="insurant_information/CNP" type="text" class="form-control" pattern="\b[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)\d{4}\b">
                    </div>
                    <div class="form-group">
                        <label for="insurant_information/email">Adresa e-mail:</label>
                        <input placeholder="E-mail" name="insurant_information/email" type="email" class="form-control">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="insurant_information/phone">Telefon 1:</label>
                        <input placeholder="Telefon 1" name="insurant_information/phone" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="insurant_information/phone2">Telefon 2:</label>
                        <input placeholder="Telefon 2" name="insurant_information/phone2" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                </div>
            </div>
            <!--- pas2.js insert-->
            <div class="row title" id="step2title">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas2">
                            Pas 2/6 Date eveniment
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step2content">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="event_information/case_type/type">Caz notificat in baza:</label>
                        <select class="form-control" name="event_information/case_type/type">
                            <option value="Acte autoritati (Politie)" selected>Acte autoritati (Politie)</option>
                            <option value="Constatare amiabila de accident">Constatare amiabila de accident</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/case_type/type_damage">Tip daune:</label>
                        <select class="form-control" name="event_information/case_type/type_damage">
                            <option value="Doar daune materiale" selected>Doar daune materiale</option>
                            <option value="Doar vatamari corporale/deces">Doar vatamari corporale/deces</option>
<!--                            <option value="Daune materiale si vatamari corporale/deces">Daune materiale si vatamari
                                corporale/deces
                            </option> -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/case_type/type_damage_to">Daune produse:</label>
                        <select class="form-control" name="event_information/case_type/type_damage_to">
                            <option value="Vehiculului pentru care solicit deschiderea notificarii">Vehiculului pentru
                                care solicit deschiderea notificari
                            </option>
                            <option value="Altor bunuri/animale" selected>Altor bunuri/animale
                            </option>							
                        </select>
                    </div>
                    <div class="form_group">
                        <label for="event_information/vehicle_type">Evenimentul s-a produs in timp ce vehiculul
                            era:</label>
                        <select class="form-control" name="event_information/vehicle_type">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Parcat/Stationat">Parcat/Stationat</option>
                            <option value="Condus">Condus</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="event_information/in_country/location_where">Locul producerii evenimentului:</label>
                        <select class="form-control" name="event_information/in_country/location_where">
                            <option value="In tara" selected>In tara</option>
                            <option value="In afara tarii">In afara tarii</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="event_information/country">Tara</label>
                        <!-- <input placeholder="Tara" name="event_information/country" type="text" class="form-control"> -->
						<select class="form-control" name="event_information/country" id="pas2country">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/county">Alege judet:</label>
                        <select class="form-control" name="event_information/in_country/county" id="pas2county">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/locality_where">Locatie:</label>
                        <select class="form-control" name="event_information/in_country/locality_where">
                            <option value="In localitate">In localitate</option>
                            <option value="In afara localitatii">In afara localitatii</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="event_information/in_country/road">Tip drum:</label>
                        <select class="form-control" name="event_information/in_country/road">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Autostrada">Autostrada</option>
                            <option value="DN">DN</option>
                            <option value="DJ">DJ</option>
                            <option value="DC">DC</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/locality">Alege localitate:</label>
                        <select class="form-control" name="event_information/in_country/locality" id="pas2locality">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/street">Strada:</label>
                        <input placeholder="Strada" name="event_information/in_country/street" type="text"
                               class="form-control">
                    </div>
                    <div class="flex-group">
                        <div class="form-group">
                            <label for="event_information/in_country/number_street">Numar:</label>
                            <input placeholder="Numar" name="event_information/in_country/number_street" type="text"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="event_information/in_country/building">Bloc:</label>
                            <input placeholder="Bloc" name="event_information/in_country/building" type="text"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="event_information/in_country/scale">Scara:</label>
                            <input placeholder="Scara" name="event_information/in_country/scale" type="text"
                                   class="form-control">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12" style="display: none;">
                    <div class="form-group">
                        <label for="event_information/in_country/from_direction">Din directia:</label>
                        <input placeholder="" name="event_information/in_country/from_direction" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/to_direction">Catre directia:</label>
                        <input placeholder="" name="event_information/in_country/to_direction" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/luminosity_condition">Conditii de luminozitate
                            :</label>
                        <select class="form-control" name="event_information/in_country/luminosity_condition">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Lumina zilei">Lumina zilei</option>
                            <option value="Luminozitate redusa">Luminozitate redusa</option>
                            <option value="Intuneric">Intuneric</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="event_information/in_country/road_condition">Stare carosabil:</label>
                        <select class="form-control" name="event_information/in_country/road_condition">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Uscat">Uscat</option>
                            <option value="Umed">Umed</option>
                            <option value="Inghetat">Inghetat</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="event_information/description">Descrierea evenimentului:</label>
                        <textarea name="event_information/description" class="form-control"
                                  placeholder="Descrierea evenimentului" style="height: 400px;"></textarea>
                    </div>
                </div>
            </div>
            <!--- pas11 insert-->
            <div class="row title" id="step11title">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas11">
                            Pas 6/6 Date despre soferul vinovat
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step11content">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="guilty_person/quality">Calitate persoana:</label>
                        <select class="form-control" name="guilty_person/quality">
							<option value="" selected>Selecteaza optiunea</option>
                            <option value="Conducator Auto" selected>Conducator Auto</option>
                            <option value="Conducator Auto si Asigurat">Conducator Auto si Asigurat</option>
                        </select>
                    </div>						
					<div class="form-group">
                        <label for="guilty_person/CNP">CNP:</label>
                        <input placeholder="CNP" name="guilty_person/CNP" type="text" class="form-control" pattern="\b[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)\d{4}\b">
                    </div>
                    <div class="form-group">
                        <label for="guilty_person/date_birth" class="active">Data nasterii:</label>
                        <div class='input-group date'>
                            <input type='text' class="form-control" name="guilty_person/date_birth"
                                   placeholder="Data"/>
                            <span class="input-group-addon">
							<span class="glyphicon glyphicon-calendar"></span>
							</span>
                        </div>
                    </div>					
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="guilty_person/firstname">Nume:</label>
                        <input placeholder="Nume" name="guilty_person/firstname" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="guilty_person/lastname">Prenume:</label>
                        <input placeholder="Prenume" name="guilty_person/lastname" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="guilty_person/county">Judet nastere:</label>
                        <select class="form-control" name="guilty_person/county" id="pas11county">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>					
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="guilty_person/phone">Telefon 1:</label>
                        <input placeholder="Telefon 1" name="guilty_person/phone" type="text" class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="guilty_person/phone2">Telefon 2:</label>
                        <input placeholder="Telefon 2" name="guilty_person/phone2" type="text" class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="guilty_person/locality">Localitate nastere:</label>
                        <select class="form-control" name="guilty_person/locality" id="pas11locality">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>					
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="guilty_person/email">Adresa e-mail:</label>
                        <input placeholder="E-mail" name="guilty_person/email" type="email" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="guilty_person/address">Adresa fizica:</label>
                        <input placeholder="Adresa" name="guilty_person/address" type="text" class="form-control">
                    </div>				
                </div>
				
            </div>			
            <!--- pas3.js insert-->
            <div class="row title" id="step3title" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas3">
                            Pas 3/10 Date vehicul avariat
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step3content" style="display: none;">
                <div class="col-lg-3 col-md-6 col-sm-12">
				    <div class="form-group">
                        <label for="injured_information/auto/hascasco">Are asigurare CASCO?</label>
                        <select class="form-control" name="injured_information/auto/hascasco">
                            <option value="" selected>Selecteaza optiunea</option>
							<option value="Da">Da</option>
							<option value="Nu">Nu</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="injured_information/auto/cascoinsurancecompany">Companie asigurare CASCO</label>
                        <select class="form-control" name="injured_information/auto/cascoinsurancecompany" id="pas1cascocompany">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>									
                    <div class="form-group" style="display: none;">
                        <label for="injured_information/auto/othercascoinsurancecompany">Alta companie asigurare CASCO:</label>
                        <input placeholder="Companie asigurari" name="injured_information/auto/othercascoinsurancecompany" type="text"
                               class="form-control">
                    </div>									
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto/registration_number">Numar inmatriculare vehicul
                            avariat:</label>
                        <input placeholder="Numar" name="injured_information/auto/registration_number" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/brand">Marca vehicul avariat:</label>
                        <select class="form-control" name="injured_information/auto/brand" id="pas3brand">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/model">Model:</label>
                        <select class="form-control" name="injured_information/auto/model" id="pas3model">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/mileage">Kilometraj:</label>
                        <div class="input-group">
                            <input placeholder="km" name="injured_information/auto/mileage"
                                   type="number"
                                   class="form-control">
                            <span class="input-group-addon" id="basic-addon2">km</span>
                        </div>
                    </div>					
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto/chassis_serial">Serie sasiu/Numar
                            identificare(VIN):</label>
                        <input placeholder="Serie" name="injured_information/auto/chassis_serial" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/manufacturing_year">Anul fabricatiei/Anul primei
                            inmatriculari:</label>
                        <select class="form-control" name="injured_information/auto/manufacturing_year" id="pas3year">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/cilinder_capacity">Capacitate cilindrica:</label>
                        <div class="input-group">
                            <input placeholder="Capacitate cilindrica" name="injured_information/auto/cilinder_capacity"
                                   type="number"
                                   class="form-control">
                            <span class="input-group-addon" id="basic-addon2">cm3</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/power">Putere:</label>
                        <div class="input-group">
                            <input placeholder="Putere" name="injured_information/auto/power"
                                   type="number"
                                   class="form-control">
                            <span class="input-group-addon" id="basic-addon2">kW</span>
                        </div>
                    </div>					
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto/category">Categoria vehiculului:</label>
                        <select class="form-control" name="injured_information/auto/category">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="A">A - autoturism</option>
                            <option value="B">B - motociclu</option>
                            <option value="C">C - autocamion sau tractor</option>
                            <option value="D">D - bicicleta cu motor</option>
                            <option value="E">E - autobus sau autocar</option>
                            <option value="F">F - remorca</option>
                        </select>
                    </div>				
                    <div class="form-group">
                        <label for="injured_information/auto/color">Culoare:</label>
                        <input placeholder="Culoare" name="injured_information/auto/color" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto/condition">Stare vehicul ca urmare evenimentului
                            produs:</label>
                        <select class="form-control" name="injured_information/auto/condition">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Deplasabil">Deplasabil</option>
                            <option value="Nedeplasabil">Nedeplasabil</option>
                        </select>
                    </div>
                </div>
            </div>
            <!--- pas4.js insert-->
            <div class="row title" id="step4title" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas4">
                            Pas 4/10 Date despre localizarea avariilor
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" id="pas4" style="display: none;">
                <!--<div class="row" id="localizareAvarie1">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/1/side">Masina:</label>
                            <select class="form-control parent-select" name="event_information/car_damage_parts/1/side">
                                <option value="" selected>Selecteaza optiunea</option>
                                <option value="Stanga">Stanga</option>
                                <option value="Dreapta">Dreapta</option>
                                <option value="Central">Central</option>
                                <option value="Mecanica">Mecanica</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/1/parts">Repere masina:</label>
                            <select multiple class="form-control" style="height: 150px;"
                                    name="event_information/car_damage_parts/1/parts">
                                <option value="Far">Far</option>
                                <option value="Aripa fata">Aripa fata</option>
                                <option value="Portiera fata">Portiera fata</option>
                                <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                                <option value="Portiera spate">Portiera spate</option>
                                <option value="Prag">Prag</option>
                                <option value="Aripa spate">Aripa spate</option>
                                <option value="Stop">Stop</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/1/other_parts">Alte repere:</label>
                            <textarea name="event_information/car_damage_parts/1/other_parts" class="form-control"
                                      placeholder="Repere" style="height: 150px;"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="form-group margin-top">
                            <button type="button" class="btn btn-default"
                                    onclick="App.actions.appendDamageLocalization()"><span
                                        class="glyphicon glyphicon-plus"></span></button>
                        </div>
                    </div>
                </div>-->
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12" id="localizareAvarie1">
                        <input type="hidden" name="event_information/car_damage_parts/1/side" value="Stanga">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/1/parts">Repere stanga:</label>
                            <select multiple class="form-control" style="height: 150px;"
                                    name="event_information/car_damage_parts/1/parts">
                                <option value="Far">Far</option>
                                <option value="Aripa fata">Aripa fata</option>
                                <option value="Portiera fata">Portiera fata</option>
                                <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                                <option value="Portiera spate">Portiera spate</option>
                                <option value="Prag">Prag</option>
                                <option value="Aripa spate">Aripa spate</option>
                                <option value="Stop">Stop</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12" id="localizareAvarie2">
                        <input type="hidden" name="event_information/car_damage_parts/2/side" value="Dreapta">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/2/parts">Repere dreapta:</label>
                            <select multiple class="form-control" style="height: 150px;"
                                    name="event_information/car_damage_parts/2/parts">
                                <option value="Far">Far</option>
                                <option value="Aripa fata">Aripa fata</option>
                                <option value="Portiera fata">Portiera fata</option>
                                <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                                <option value="Portiera spate">Portiera spate</option>
                                <option value="Prag">Prag</option>
                                <option value="Janta">Janta</option>
                                <option value="Aripa spate">Aripa spate</option>
                                <option value="Stop">Stop</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12" id="localizareAvarie3">
                        <input type="hidden" name="event_information/car_damage_parts/3/side" value="Central">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/3/parts">Repere centrale:</label>
                            <select multiple class="form-control" style="height: 150px;"
                                    name="event_information/car_damage_parts/3/parts">
                                <option value="Bara fata">Bara fata</option>
                                <option value="Grila bara fata">Grila bara fata</option>
                                <option value="Grila radiator">Grila radiator</option>
                                <option value="Capota motor">Capota motor</option>
                                <option value="Parbriz">Parbriz</option>
                                <option value="Airbag sofer">Airbag sofer</option>
                                <option value="Airbag pasager">Airbag pasager</option>
                                <option value="Plafon">Plafon</option>
                                <option value="Luneta">Luneta</option>
                                <option value="Capota portbagaj">Capota portbagaj</option>
                                <option value="Bara spate">Bara spate</option>
                                <option value="Panou spate">Panou spate</option>
                                <option value="Carlig remorcare">Carlig remorcare</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12" id="localizareAvarie4">
                        <input type="hidden" name="event_information/car_damage_parts/4/side" value="Mecanica">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/4/parts">Repere macanice:</label>
                            <select multiple class="form-control" style="height: 150px;"
                                    name="event_information/car_damage_parts/4/parts">
                                <option value="Radiator apa">Radiator apa</option>
                                <option value="Radiator A/C">Radiator A/C</option>
                                <option value="Electroventilator">Electroventilator</option>
                                <option value="Motor">Motor</option>
                                <option value="Cutie Viteze">Cutie Viteze</option>
                                <option value="Suspensie/Directie fata">Suspensie/Directie fata</option>
                                <option value="Suspensie spate">Suspensie spate</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12" id="localizareAvarie5">
                        <input type="hidden" name="event_information/car_damage_parts/5/side" value="Alte repere">
                        <div class="form-group">
                            <label for="event_information/car_damage_parts/5/other_parts">Alte repere:</label>
                            <textarea name="event_information/car_damage_parts/5/other_parts" class="form-control"
                                      placeholder="Repere" style="height: 150px;"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <!--- pas5 insert-->
            <div class="row title" id="step5title">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas5">
                            Pas 3/6 Date despre avariile provocate altor obiecte,in afara autovehiculelor
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step5content">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/description">Descriere:</label>
                        <textarea name="injured_information/description" class="form-control" placeholder="Descriere"
                                  style="height: 100px;"></textarea>
                    </div>
                </div>
            </div>
            <!--- pas6 insert-->
            <div class="row title" id="step6title" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas6">
                            Pas 6/10 Date despre proprietarul vehiculului pentru care se notifica dauna
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step6content" style="display: none;">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto_owner/person_type">Tip persoana:</label>
                        <select class="form-control" name="injured_information/auto_owner/person_type">
                            <option value="Persoana fizica" selected>Persoana fizica</option>
                            <option value="Persoana juridica">Persoana juridica</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="injured_information/auto_owner/companyname">Denumire societate:</label>
                        <input placeholder="Denumire" name="injured_information/auto_owner/companyname" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group" style="display: none;">
                        <label for="injured_information/auto_owner/CUI">CUI:</label>
                        <input placeholder="CUI" name="injured_information/auto_owner/CUI" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/type">Persoana:</label>
                        <select class="form-control" name="injured_information/auto_owner/type">
                            <option value="Alta persoana" selected>Alta persoana
                            </option>
                            <option value="Aceeasi cu cea care notifica">Aceeasi cu cea care notifica</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/firstname">Nume:</label>
                        <input placeholder="Nume" name="injured_information/auto_owner/firstname" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/lastname">Prenume:</label>
                        <input placeholder="Prenume" name="injured_information/auto_owner/lastname" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/CNP">CNP:</label>
                        <input placeholder="CNP" name="injured_information/auto_owner/CNP" type="text"
                               class="form-control" pattern="\b[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)\d{4}\b">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto_owner/county">Alege judet:</label>
                        <select class="form-control" name="injured_information/auto_owner/county" id="pas6county">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/locality">Alege localitate:</label>
                        <select class="form-control" name="injured_information/auto_owner/locality" id="pas6locality">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto_owner/street">Strada:</label>
                        <input placeholder="Strada" name="injured_information/auto_owner/street" type="text"
                               class="form-control">
                    </div>
                    <div class="flex-group">
                        <div class="form-group">
                            <label for="injured_information/auto_owner/street_number">Numar:</label>
                            <input placeholder="Numar" name="injured_information/auto_owner/street_number" type="text"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="injured_information/auto_owner/building">Bloc:</label>
                            <input placeholder="Bloc" name="injured_information/auto_owner/building" type="text"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="injured_information/auto_owner/scale">Scara:</label>
                            <input placeholder="Scara" name="injured_information/auto_owner/scale" type="text"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="flex-group">
                        <div class="form-group">
                            <label for="injured_information/auto_owner/floor">Etaj:</label>
                            <input placeholder="Etaj" name="injured_information/auto_owner/floor" type="text"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="injured_information/auto_owner/apartment">Apartament:</label>
                            <input placeholder="Apartament" name="injured_information/auto_owner/apartment" type="text"
                                   class="form-control">
                        </div>
                        <div></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/auto_owner/phone">Telefon 1:</label>
                        <input placeholder="Telefon 1" name="injured_information/auto_owner/phone" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/phone2">Telefon 2:</label>
                        <input placeholder="Telefon 2" name="injured_information/auto_owner/phone2" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/auto_owner/email">Adresa e-mail:</label>
                        <input placeholder="E-mail" name="injured_information/auto_owner/email" type="email"
                               class="form-control">
                    </div>
                </div>
            </div>
            <!--- pas7 insert-->
            <div class="row title" id="step7title" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas7">
                            Pas 7/10 Date despre conducatorul vehiculului pentru care se notifica dauna
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step7content" style="display: none;">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/person_type">Tip persoana:</label>
                        <select class="form-control" name="injured_information/person_type">
                            <option value="Alta persoana" selected>Alta persoana</option>
                            <option value="Aceeasi persoana cu cea care notifica">Aceeasi persoana cu cea care notifica
                            </option>
                            <option value="Aceeasi persoana cu proprietarul vehiculului">Aceeasi persoana cu
                                proprietarul
                                vehiculului
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/firstname">Nume:</label>
                        <input placeholder="Nume" name="injured_information/firstname" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/lastname">Prenume:</label>
                        <input placeholder="Prenume" name="injured_information/lastname" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/CNP">CNP:</label>
                        <input placeholder="CNP" name="injured_information/CNP" type="text" class="form-control" pattern="\b[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)\d{4}\b">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
<!--				
                    <div class="form-group">
                        <label for="injured_information/lastname_father">Prenume tata:</label>
                        <input placeholder="Prenume tata" name="injured_information/lastname_father" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/lastname_mother">Prenume mama:</label>
                        <input placeholder="Prenume mama" name="injured_information/lastname_mother" type="text"
                               class="form-control">
                    </div>
-->
                    <div class="form-group">
                        <label for="injured_information/phone">Telefon 1:</label>
                        <input placeholder="Telefon 1" name="injured_information/phone" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/phone2">Telefon 2:</label>
                        <input placeholder="Telefon 2" name="injured_information/phone2" type="text"
                               class="form-control" pattern="^\d{10}$">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/date_birth" class="active">Data nasterii:</label>
                        <div class='input-group date'>
                            <input type='text' class="form-control" name="injured_information/date_birth"
                                   placeholder="Data"/>
                            <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/county">Judet nastere:</label>
                        <select class="form-control" name="injured_information/county" id="pas7county">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/locality">Localitate nastere:</label>
                        <select class="form-control" name="injured_information/locality" id="pas7locality">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/license_number">Permis conducere nr.:</label>
                        <input placeholder="Numar" name="injured_information/license_number" type="text"
                               class="form-control">
                    </div>
<!--
                    <div class="form-group">
                        <label for="injured_information/category">Categoria:</label>
                        <select class="form-control" name="injured_information/category">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                            <option value="3">D</option>
                            <option value="3">E</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="injured_information/license_release_by">Eliberat de:</label>
                        <input placeholder="Eliberat de" name="injured_information/license_release_by" type="text"
                               class="form-control">
                    </div>
-->
                    <div class="form-group">

                        <label for="injured_information/license_release_date" class="active">Data eliberarii
                            permisului:</label>
                        <div class='input-group date'>
                            <input type='text' class="form-control" name="injured_information/license_release_date"
                                   placeholder="Data"/>
                            <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="injured_information/work/profession">Profesia:</label>
                        <input placeholder="Profesia" name="injured_information/work/profession" type="text"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="injured_information/work/name">Denumire loc de munca:</label>
                        <input placeholder="Denumire" name="injured_information/work/name" type="text"
                               class="form-control">
                    </div>
<!--
                    <div class="form-group">
                        <label for="injured_information/work/address">Adresa loc de munca:</label>
                        <input placeholder="Adresa" name="injured_information/work/address" type="text"
                               class="form-control">
                    </div>
-->
                </div>
            </div>
            <!--- pas8.js insert-->
            <div class="row title" id="step8title" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas8">
                            Pas 8/10 Date despre vatamari corporale si/sau deces
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step8content" style="display: none;">
                <div class="col-lg-12 col-md-12 col-sm-12 margin-bottom">
                    <label for="event_information/injured_persons/declaration"><input type="checkbox"
                                                                                      name="event_information/injured_persons/declaration"/>
                        Declar pe proprie raspundere ca in
                        urma evenimentului rutier, nu a rezultat
                        decesul sau ranirea vreunei persoane ori producerea de pagube altor persoane</label>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12" id="divpas8injured">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="event_information/injured_persons/number_injured_persons">Numar persoane
                                    vatamate in urma evenimentului
                                    :</label>
                                <input placeholder="Numar"
                                       name="event_information/injured_persons/number_injured_persons" type="number"
                                       min="0" class="form-control" id="number_injured_people">
                            </div>
                        </div>
                    </div>
                    <div id="divpas8injuredPersons">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12" id="divpas8dead">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="event_information/injured_persons/number_dead_persons">Numar persoane
                                    decedate in urma evenimentului:</label>
                                <input placeholder="Numar" name="event_information/injured_persons/number_dead_persons"
                                       id="number_dead_people" min="0"
                                       type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div id="divpas8deadPersons"></div>
                </div>
            </div>
            <!--- pas9 insert-->
            <div class="row title" id="step9title">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas9">
                            Pas 4/6 Locul unde va avea loc constatarea
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step9content">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="constat_meeting_details/county">Judet:</label>
                        <select class="form-control" name="constat_meeting_details/county" id="pas9county"
                                required="required">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="constat_meeting_details/location">Localitate:</label>
                        <select class="form-control" name="constat_meeting_details/location" id="pas9locality">
                            <option value="" selected>Selecteaza optiunea</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-9 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="constat_meeting_details/comment">Observatii/mentiuni:</label>
                        <textarea name="constat_meeting_details/comment" class="form-control" placeholder="Observatii"
                                  style="height: 105px;"></textarea>
                    </div>
                </div>
            </div>
            <!--- pas10 insert-->
            <div class="row title" id="step10title">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-container" id="titlepas10">
                            Pas 5/6 Persoana contact pentru stabilirea constatarii
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content" id="step10content">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="contact_person/type">Tip persoana:</label>
                        <select class="form-control" name="contact_person/type">
                            <option value="Alta persoana" selected>Alta persoana
                            </option>
                            <option value="Aceeasi cu persoana care notifica dauna">Aceeasi cu persoana care notifica dauna
                            </option>
                            <option value="Aceeasi persoana cu proprietarul vehiculului">Aceeasi persoana cu proprietarul vehiculului
                            </option>
                            <option value="Aceeasi persoana cu conducatorul vehiculului">Aceeasi persoana cu conducatorul vehiculului
                            </option>								
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="contact_person/firstname">Nume:</label>
                        <input placeholder="Nume" name="contact_person/firstname" type="text" class="form-control" required="required">
                    </div>
                    <div class="form-group">
                        <label for="contact_person/lastname">Prenume:</label>
                        <input placeholder="Prenume" name="contact_person/lastname" type="text" class="form-control" required="required">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="contact_person/phone">Telefon 1:</label>
                        <input placeholder="Telefon 1" name="contact_person/phone" type="text" class="form-control" pattern="^\d{10}$" required="required">
                    </div>
                    <div class="form-group">
                        <label for="contact_person/phone2">Telefon 2:</label>
                        <input placeholder="Telefon 2" name="contact_person/phone2" type="text" class="form-control" pattern="^\d{10}$">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="contact_person/email">Adresa e-mail:</label>
                        <input placeholder="E-mail" name="contact_person/email" type="email" class="form-control" required="required">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-body" style="height: 40px;"></div>
                </div>
            </div>			
            <div class="row margin-bottom">
                <div class="col-sm-3 col-lg-4"></div>
                <div class="col-xs-6 col-sm-3 col-lg-2">
                    <button type="button" class="btn btn-default" onclick="App.actions.backAction()"
                            style="width: 100%"><span
                                class="glyphicon glyphicon-share-alt icon-flipped"></span> Inapoi
                    </button>
                </div>
                <div class="col-xs-6 col-sm-3 col-lg-2">
                    <button type="submit" class="btn btn-success" style="width: 100%"><span
                                class="glyphicon glyphicon-send"></span> Trimite
                        notificarea
                    </button>
                </div>
            </div>
        </form>

        <!-- Modal -->
        <div class="modal-area"></div>

    </div>
<?php
require_once('./shared/footer.php');
?>
