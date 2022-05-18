import Contacts from "../components/contacts";
import GetInTouchForm from "../components/getInTouchForm";
import {
  SectionContacts,
  ContactsContainer,
  Row,
  MapColumn,
  Map,
} from "../styles/contactUsStyle";
const ContactUs = () => {
  return (
    <>
      <SectionContacts>
        <ContactsContainer>
          <Contacts />
        </ContactsContainer>
      </SectionContacts>

      <SectionContacts>
        <ContactsContainer>
          <Row>
            <MapColumn>
              <GetInTouchForm />
            </MapColumn>
            <MapColumn>
              <Map>
                <iframe
                  width="100%"
                  height="550"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=550&amp;hl=en&amp;q=+(My%20BusiLondon%20Eye,%20London,%20United%20Kingdomness%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </Map>
            </MapColumn>
          </Row>
        </ContactsContainer>
      </SectionContacts>
    </>
  );
};
export default ContactUs;
