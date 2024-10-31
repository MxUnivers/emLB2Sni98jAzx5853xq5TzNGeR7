import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';  // Importer la locale française

// Configurer moment pour utiliser la locale française
moment.locale('fr');

const RelativeTime = ({ date }) => {
    const [relativeTime, setRelativeTime] = useState(moment(date).fromNow());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRelativeTime(moment(date).fromNow());
        }, 60000);  // Mettre à jour chaque minute

        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <span>{relativeTime}</span>
    );
};

export default RelativeTime;