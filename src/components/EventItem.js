import React from "react";

export default function EventItem(props) {
  let { title, url, img, venue, date, timeZone, minPrice, maxPrice, currency } =
    props;

  const dateTime = new Date(date).toLocaleString("en-US", { timeZone });
  const newDate = dateTime.split(",");

  return (
    <>
      <div className='card'>
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>

          <ul className='list-group list-group-flush container'>
            <li className='list-group-item'>
              <strong>Venue:</strong> {venue}
            </li>
            {/* AL times are set according to en-US timezone  */}
            <li className='list-group-item'>
              <strong>Date : </strong> {new Date(newDate[0]).toDateString()}
            </li>
            <li className='list-group-item'>
              <strong>Time : </strong> {newDate[1]}{" "}
            </li>

            <li className='list-group-item'>
              <strong>Ticket Price :</strong> {minPrice} - {maxPrice} {currency}
            </li>
          </ul>

          <a
            href={url}
            className='btn btn-dark'
            target='_blank'
            rel='noreferrer'>
            View Details
          </a>
        </div>
      </div>
    </>
  );
}
