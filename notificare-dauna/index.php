<?php
require_once('./shared/header.php');
?>
    <div id="cloud--page-blockUI" style="display: none">
        <div class="center">
            <div class="blockUI-message">
                <!--<div class="cloud--spinner">
                    <div class="cloud--spinner-dot1"></div>
                    <div class="cloud--spinner-dot2"></div>
                </div>-->
                <div class="loader"></div>
                <span class="text">Verificare Polita...</span>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div style="align-items: flex-end; display: flex;">
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
    <div class="container-fluid">
        <form method="post" action="./index.php?request=nextPageForm">
            <div class="row">
                <h2 class="text-center bold">Notificare dauna</h2>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <p>La efectuarea constatarii daunelor, se recomanda prezenta ambilor coducatori si a ambelor
                        autovehicule implicate in evenimentul rutier. Notificarea daunei se poate
                        face daca aveti la indemana documentele de mai jos:</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <ul>
                        <li>polita de asigurare a vehiculului vinovat;</li>
                        <li>actul de identitate (C.I/buletin) a persoanei care face notificarea;</li>
                        <li>certificatul de inmatriculare (talon)/cartea de identitate a vehiculului avariat;</li>
                        <li>permisul de conducere al soferului pagubit;</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <ul>
                        <li>constatarea amiabila de accident sau documentele emise de autoritati
                            (politie/pompieri/etc;
                        </li>
                        <li>datele proprietarului vehiculului pagubit;</li>
                        <li>alte documente in functie de evenimentul care a avut loc.</li>

                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-5 margin-bottom">
                    <div class="col-sm-4">
                        <label for="policy_number">Introduceti numar polita:</label>
                    </div>
                    <div class="col-sm-8 margin-bottom">
                        <div class="form-group">
                            <input type="text" class="form-control" id="policyNumber" name="policyNumber"
                                   required="required" placeholder="Numar polita">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-5 margin-bottom">
                    <div class="col-sm-4">
                        <label for="dateTime">Data si ora producerii evenimentului:</label>
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                            <div class='input-group date' id='eventDateTime'>
                                <input type='text' class="form-control" placeholder="Data si ora" name="dateTime"
                                       required="required" id="dateTime"/>
                                <span class="input-group-addon">
									<span class="glyphicon glyphicon-calendar"></span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-2 margin-bottom">
                    <div class="col-sm-12">
                        <div class="center">
                            <button type="button" class="btn btn-primary" onclick="App.actions.checkPolicy()"><span
                                        class="glyphicon glyphicon-check"></span> Verifica polita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row hidden">
                <div class="col-sm-12">
                    <p id="confirmPolicy" class="confirmPolicy">Polita de asigurare RCA nr. xxxxxx exista in baza de
                        date
                        Watford si este valabila la momentul accidentului. Va rugam sa continuati completarea avizarii
                        daunei.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 checkbox">
                    <p>În conformitate cu prevederile RegulamentuluI UE 679/ 2016 pentru protecţia persoanelor cu
                        privire la prelucrarea datelor cu caracter personal şi libera circulaţie a acestor date, vă
                        informăm că Watford Insurance Company Europe – Sucursala Bucuresti prelucrează datele dvs. cu
                        caracter personal (inclusiv CNP) în temeiul legii, cu bună-credinţă, în scopuri legitime, pentru
                        oferirea (inclusiv calcularea tarifelor de prime de asigurare) încheierea, administrarea și
                        executarea contractului de asigurare.</p>

                    <p><input type="checkbox" id="checkBox" required="required" class="big-checkbox"><span
                                style="margin-left: 25px;">Am luat la cunostinta de faptul ca, potrivit Regulamentului UE 679/2016, am urmatoarele
                        drepturi: dreptul de acces la date, dreptul la rectificarea sau actualizarea datelor, dreptul la
                        stergerea datelor, cand sunt indeplinite o serie de conditii (spre ex. daca datele nu mai sunt
                        necesare pentru scopurile de mai sus) dreptul la restrictionarea prelucrarii, dreptul de a mi se
                        comunica orice rectificare sau stergere sau restrictionare a prelucrarii, dreptul la
                        portabilitatea datelor, dreptul la opozitie, dreptul de a fi notificat in caz de incalcare a
                        securitatii datelor, dreptul de a modifica sau de a-mi retrage consimțământul cu privire la
                        prelucrarea datelor cu caracter personal pentru cazurile in care mi-am exprimat acest
                        consimtamant, dreptul de adresare justiţiei si le pot exercita prin adresare fie catre Watford
                        Insurance Company Europe – Sucursala Bucuresti, A.N.S.P.D.C.P. sau instanţa de judecată
                        competentă, după caz.</span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 center margin-bottom">
                    <div id="captcha"></div>
                </div>
                <div class="col-sm-12 center margin-bottom">
                    <?php
                    if (isset($_GET['captcha'])) {
                        echo '<p class="error-label">Va rugam completati captcha-ul.</p>';
                    }
                    ?>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 center margin-bottom">
                    <button type="submit" id="submitBtn" class="btn btn-primary" disabled="disabled"><span class="glyphicon glyphicon-share-alt
"></span> Completeaza notificarea de dauna
                    </button>
                </div>
            </div>
        </form>
    </div>
<?php
require_once('./shared/footer.php');
?>
