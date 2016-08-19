var React = require('react');

/**
 * Mimpact display ads from right side of screen
 * based on Component React using Statful machine
 * TODO: consolidate props and state according to pub fonctionnality
 */
class Mimpact extends React.Component {
    constructor(props) {
        super(props);
        // Default state of the Component , basecly the css displaying the ads first
        // TODO : in typescript use enum for state of the ads {INIT , DISPLAY, COMPLETED, FULLSCREEN, STATS}
        this.state = {
            etat: "INIT"
        };
        // FIXME: for the moment display the ads on the fly
        setTimeout(() => this.setState({etat: "DISPLAY"}), 1000);
    }

    /**
     * get the css style of the ads
     * @param etat
     * @returns {{width: *, top: (*|string|Number|Window), height: *, position: string, transition: string}}
     */
    getStyle(etat) {
        // default styles for this adds
        //TODO consolidate some of the style in css file may be an option
        var res = {
            width: this.props.width,
            top: this.props.top,
            height: this.props.height,
            position: 'absolute',
            transition: 'right 1s ease-out'
        };
        // use etat as state for the ads according to state machin
        switch (etat) {
            case "DISPLAY":
            {
                //display the adds showing the adds on the right side of the screen
                res.right = 0;
                break;
            }
            default:
                //hide the ads
                // FIXME: how th consolidate the overflow:hidden on the parent
                res.right = -this.props.width;
                break;
        }
        return res;
    }

    /**
     * return the html tags for the ads according to state
     * @returns {XML}
     */
    render() {
        //TODO dispatch in props server path, label of the ads, etc
        var src = "https://adserver-images.adikteev.com/uploads/campaign_param/file/117635/"
            + this.props.width + "x" + this.props.height
            + "_mimpact_" + this.props.media;
        //get style on the fly according to state
        var style = this.getStyle(this.state.etat);
        return (
            <div style={style}>
                <img src={src} width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}
export default Mimpact;