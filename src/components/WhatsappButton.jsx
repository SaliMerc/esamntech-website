import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function WhatsApp() {
  return (
    <div>
      <WhatsAppWidget
        phoneNumber="+254796009226" 
        companyName="E-Samn Labs"
        message="Got a project idea? Let’s talk!"
        replyTimeText="Typically replies within minutes"
        sendButtonText="Send Message"
      />
    </div>
  );
}

export default WhatsApp;