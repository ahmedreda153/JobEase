function getCardNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('card');
}

const cardPhotos = {
    '1': ['./assets/images/maintenance.jpg', 'Maintenance', 'Maintenance is the process of ensuring that buildings and other assets retain a good appearance and operate at optimum efficiency. Inadequate maintenance can result in decay, degradation and reduced performance and can affect heath and threaten the safety of users, occupants and others in the vicinity.'],
    '2': ['./assets/images/cleaning.jpg', 'Cleaning', 'Cleaning is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment. Cleaning occurs in many different contexts, and uses many different methods. Several occupations are devoted to cleaning.'],
    '3': ['./assets/images/child-care.jpg', 'Child Care', 'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to twenty years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.'],
    '4': ['./assets/images/pet-care.jpg', 'Pet Care', 'Pet care is the act of caring for a pet. This includes feeding, exercising and grooming the pet. Pets also need love and attention. Your pet depends on you for everything – food, shelter, and most of all, love. When you adopt a pet, you are making a commitment to care for the pet for the rest of its life.'],
    '5': ['./assets/images/concierge.jpg', 'Concierge', 'A concierge is an employee of a multi-tenant building, such as a hotel or apartment building, who receives guests. The concept has been applied more generally to other hospitality settings and to personal concierges who manage the errands of private clients.'],
    '6': ['./assets/images/catering.jpg', 'Catering', 'Catering is the business of providing food service at a remote site or a site such as a hotel, hospital, pub, aircraft, cruise ship, park, filming site or studio, entertainment site, or event venue.'],
    '7': ['./assets/images/courier.jpg', 'Courier', 'A courier is a company, an employee of that company or a person who delivers a message, package or letter from one place or person to another place or person. Couriers are distinguished from ordinary mail services by features such as speed, security, tracking, signature, specialization and individualization of express services, and swift delivery times, which are optional for most everyday mail services.'],
    '8': ['./assets/images/laundry.jpg', 'Laundry', 'Laundry refers to the washing of clothing and other textiles. Laundry processes are often done in a room reserved for that purpose; in an individual home this is referred to as a laundry room, Laundry in Australian English or utility room. An apartment building or student hall of residence may have a shared laundry facility such as a tvättstuga. A stand-alone business is referred to as a self-service laundry (launderette in British English or laundromat in American English).'],
};

const cardNumber = getCardNumberFromUrl();

const displayedPhoto = document.getElementById('service-photo');
const displayedTitle = document.getElementById('service-title');
const displayedDescription = document.getElementById('service-desc');
if (cardNumber) {
    displayedPhoto.src = cardPhotos[cardNumber][0];
    displayedTitle.innerHTML = cardPhotos[cardNumber][1];
    displayedDescription.textContent = cardPhotos[cardNumber][2];
}