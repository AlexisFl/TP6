import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'
import './link.css'
import PageAcceuil from "./PageAcceuil.jsx";
import CreerUnTicket from "./CreerUnTicket.jsx";

function App() {
    const [listeDeTickets, setListeDeTickets] = useState([{ nom: "Ticket 1", description: "Description 1", priorite : -1, traite: false }, { nom: "Ticket 2", description: "Description 2", priorite : -1, traite: false  }])
    function ajouterTicket(ticket) {
        setListeDeTickets([...listeDeTickets, ticket])
        console.log(listeDeTickets)
        console.log(ticket)
    }



    return (
        <div>

            <BrowserRouter>
                <nav>
                <Link className="link" to="/PageAcceuil">Acceuil</Link>
                <Link className="link" to="/CreerUnTicket">Créer un ticket</Link>
                <Link className="link" to="/GererLesTickets">Gerer les tickets</Link>
                </nav>
                Ce texte va rester sur toutes les pages.

                <Routes>
                    <Route index element={<p>Nous sommes à la racine</p>} />
                    <Route path="PageAcceuil" element={<PageAcceuil />} />
                    <Route path="CreerUnTicket" element={<CreerUnTicket onAjouterTicket={ajouterTicket}/>} />

                </Routes>
                {listeDeTickets.map((ticket) => (
                    <div>
                        <h1>{ticket.nom}</h1>
                        <p>{ticket.description}</p>
                        <p>{ticket.priorite}</p>
                        <button>+</button>
                        <button>-</button>
                        <p>{ticket.traite ? "Traité" : "Non traité"}</p>
                    </div>
                ))}
            </BrowserRouter>

        </div>




    )

}

export default App
