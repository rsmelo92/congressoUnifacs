<?php 
if(isset($_POST['enviar']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$formcontent="De: $name \n Email: $email \n Telefone: $tel \n\n Messagem: $message";
$recipient = "rsmelo_@hotmail.com, congressodetiunifacs@gmail.com";
$subject = "Congresso de TI Unifacs, mensagem de $name";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Erro! Algo de errado aconteceu");
echo "Obrigado, $name ! Em breve entraremos em contato.";
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <meta name="author" content="">

    <title>Congresso Unifacs</title>
    <link href="congresso/css/bootstrap.min.css" rel="stylesheet">
    <link href="congresso/css/font-awesome.min.css" rel="stylesheet">
    <link href="congresso/css/congresso.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
  </head>

  <body>
<header>
    
</header>


    <section class="page-content col-sm-8 col-xs-12">
    <h2 class="text-h">Preencha o Formulário e Entre em Contato</h2>
    <hr>
        <div class="col-md-10 col-md-offset-4">
            <form action="" class="form" method="post">

            <div class="entre-contato">

            <div class="form-group ">
            <input class="form-control form-style" name="name" id="name" placeholder="Nome*" required="" type="text">
            </div>

            <div class="form-group">
            <input class="form-control form-style" name="email" id="email" placeholder="Email*" required="" type="email">
            </div>

            <div class="form-group">
            <input class="form-control form-style" name="tel" id="tel" placeholder="Telefone(Opcional)">
            </div>

            <div class="form-group">
            
            <textarea class="form-control form-style" name="message" id="message" placeholder="Messagem*" rows="4"></textarea>
            </div>


            <input class="btn btn-primary btn-form btn-sm btn-block" role="button" type="submit" value="Enviar" name="enviar">
            </div>
            </form>
        </div>
    </section>

    

    <footer id="footer" class="footer-congresso fixed-bottom col-xs-12">
        <div class="col-sm-6">
            <p><small>Unifacs - Todos os direitos reservados</small></p>
        </div>
        <div class="col-sm-6">
            <p class="pull-right"><small>Feito por Rafael Melo</small></p>
        </div>
    </footer>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="congresso/js/bootstrap.min.js"></script>
    <script src="congresso/js/script.js"></script>
  </body>
</html>
