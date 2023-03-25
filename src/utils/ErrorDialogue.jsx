import { confirmAlert} from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css";

function ErrorDialogue(err = 'Ann error occured. Please try again!'){

  confirmAlert({
    title: "Error Occured",
    message: err,
    buttons: [
      {
        label: "Ok",
      }
    ]
  })
}

export default ErrorDialogue