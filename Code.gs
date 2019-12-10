function populateSheet(){

  // ALL PRAISE AND CREDIT TO Ms.Waffle who hooked it the hell up.
  // I (mateo) made very few changes, to potentially negative effect.
  // http://wafflebytes.blogspot.com/2018/12/google-script-revisiting-making-form.html

  // call your form and connect to the drop-down item
  var form = FormApp.openById("<insert_form_ID_here>");

  var namesList = form.getItemById("<this_was_a_multiple_choice_item_id>").asMultipleChoiceItem();

  // identify the sheet (use the file name) where the data resides needed to populate the drop-down
  var ss = SpreadsheetApp.getActive();
  var names = ss.getSheetByName("<insert_title_of_google_sheet>");

  // grab the values in the first column of the sheet - use 2 to skip header row
  // NOTE: This math is off. I just jiggled the handle until I got it working for my data.
  var namesValues = names.getRange(1, 1, names.getMaxRows() - 1).getValues();

  var answers = [];

  // convert the array ignoring empty cells
  for(var i = 0; i < namesValues.length; i++)
    if(namesValues[i][0] != "")
      answers[i] = namesValues[i][0];

  // populate the drop-down with the array data
  namesList.setChoiceValues(answers);
}

