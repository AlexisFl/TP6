import { useState } from 'react'

function CreerUnTicket({onAjouterTicket}) {
    const [nomTicket, setNomTicket] = useState("")
    const [descriptionTicket, setDescriptionTicket] = useState("")
    return (
        <div>
            <h1>Créer un ticket</h1>
            <p>Entrez un nom de ticket</p>
            <input type="text" value={nomTicket} onChange={(e) => setNomTicket(e.target.value)} />
            <p>Entrez une description</p>
            <textarea value={descriptionTicket} onChange={(e) => setDescriptionTicket(e.target.value)} />
            <br/>
            <br/>
            <button onClick={() => onAjouterTicket({nom: nomTicket, description : descriptionTicket, priorite: -1, traite: false })}>Ajouter un ticket</button>
        </div>
    )
}

export default CreerUnTicket