if (typeof(Storage) !== "undefined") {
    function updateStatus(msg) {
	var s = document.getElementById("status")
	s.innerHTML = msg
    }
    
    function checkLocalStorage(textarea_id) {
	var editor = document.getElementById(textarea_id)
	if (typeof(localStorage[textarea_id]) !== "undefined") {
	    editor.value = localStorage[textarea_id]
	    updateStatus("Loaded text (len=" + editor.value.length + ") from local storage.")
	} else {
	    updateStatus("No previous saved text from local storage.")
	}
    }

    function autosaveToLocalStorage(textarea_id) {
	var editor = document.getElementById(textarea_id)
	if (editor.value !== "") {
	    localStorage[textarea_id] = editor.value
	    updateStatus("Saved to local storage!")
	}
    }

    function clearAll(textarea_id) {
	var editor = document.getElementById(textarea_id)
	editor.value = ""
	localStorage.removeItem(textarea_id)
    }
} else {
    alert("No local storage found!");
}
