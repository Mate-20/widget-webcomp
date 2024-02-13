import { LitElement, html, css } from 'lit';
class MultipleData extends LitElement {
    static styles = css`
      
.container{
    padding: 50px;
    /* background-color:rgb(14, 14, 14) ; */
    background: linear-gradient(118deg, rgba(36,36,36,1) 0%, rgba(0,0,0,1) 100%);
}
.blur{
    height: 100vh;
    overflow: hidden;
    filter: blur(3px);
}
.heading{
    font-size: 35px;
    color: white;
    font-weight: 900;
    
  }
.cardContainer {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns in each row */
    justify-items: center;
    row-gap: 30px;
}

.modal{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}  
    `;
    
    static properties = {
      cardData: { type: Array }
    };
  
    constructor() {
      super();
      this.cardData = [{ image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", location: "Berlin, Germany" },
      { image:"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Ted X", date: "February 3 - 7, 2024", location: "Tokyo, Japan" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Andha Yug", date: "February 3 - 7, 2024", location: "Delhi, India" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Andha Yug", date: "February 3 - 7, 2024", location: "Delhi, India" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Andha Yug", date: "February 3 - 7, 2024", location: "Delhi, India" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Marathon", date: "February 3 - 7, 2024", location: "Berlin, Germany" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Marathon", date: "February 3 - 7, 2024", location: "Berlin, Germany" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Marathon", date: "February 3 - 7, 2024", location: "Berlin, Germany" },
      { image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg", eventName: "Marathon", date: "February 3 - 7, 2024", eventName: "Marathon", date: "February 3 - 7, 2024", location: "Berlin, Germany" }
    ]
    //   this.IsModalOpen = false;
    }
  
    // handleModal(open) {
    //   this.IsModalOpen = open;
    // }
  
    render() {
      return html`
        <div class="body">
          <div class="container">
            <div class="heading">Your Events</div>
            <div class="cardContainer">
              ${this.cardData.map((item, key) => html`
                <card-component
                  .image=${item.image}
                  .date=${item.date}
                  .eventName=${item.eventName}
                  .location=${item.location}
                  @handleModal=${this.handleModal}
                  key=${key}
                ></card-component>
              `)}
            </div>
          </div>
          ${this.IsModalOpen ? html`
            <div class="modal">
              <modal-component .handleModal=${this.handleModal} .dataNumber=${3}></modal-component>
            </div>
          ` : ''}
        </div>
      `;
    }
  }
  
  customElements.define('multiple-data', MultipleData);
  