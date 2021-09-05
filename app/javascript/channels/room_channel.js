import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {

    // console.log("helllo covid")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message_holder').append('<div class="message">' + data.content +  '</div>')
    // console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_messages;

$(document).on('turbolinks:load', function(){
  submit_messages();
})

submit_messages = function(){
  $('#message_content').on('keydown', function(e){
    if(e.keyCode == 13){
      $('input').click()
      e.target.value = ''
      e.preventDefault()
    }
  })
  $('input[type="submit"]').on("click", function(e){
      console.log(e);
      $('#message_content').val('')
      // e.preventDefault()
      // $('#message_content').preventDefault()
  })
}
