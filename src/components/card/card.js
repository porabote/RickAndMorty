import React, { Component } from 'react'
import Moment from 'moment';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        showed: true
    }

    render() {

        const { data } = this.props
        console.log(this.props);

        return (
            <div>
                <div className="card-character">
                    <div className="card-character__image" style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div className="card-character__descr">


                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Name</div>
                            <div className="card-character__descr-value"><h3>{data.name}</h3></div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Gender</div>
                            <div className="card-character__descr-value">{data.gender}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">location</div>
                            <div className="card-character__descr-value">{data.location.name}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Status</div>
                            <div className="card-character__descr-value">{data.status}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Species</div>
                            <div className="card-character__descr-value">{data.species}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Status</div>
                            <div className="card-character__descr-value">{data.status}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Origin</div>
                            <div className="card-character__descr-value">{data.origin.name}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">created</div>
                            <div className="card-character__descr-value">{Moment(data.created).format('d MMM YYYY')}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Episode</div>
                            <div className="card-character__descr-value">{data.episode.length}</div>
                        </div>
                        <div className="card-character__descr-item">
                            <div className="card-character__descr-key">Type</div>
                            <div className="card-character__descr-value">{data.type}</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Card