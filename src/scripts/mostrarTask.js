<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

function mostrarTask(){
    $(document).ready(function() {
      $("#botao-ajax").click(function() {
        $.ajax({
          url: "../../task.php",
          type: "GET",
          //data: {},
          success: function(result) {
            $("#resultado-ajax").html(result);
          },
          error: function() {
            alert("Ocorreu um erro ao enviar a solicitação Ajax.");
          }
        });
      });
    });
}