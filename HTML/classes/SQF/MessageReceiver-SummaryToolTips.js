NDSummary.OnToolTipsLoaded("SQFClass:MessageReceiver",{259:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">This class has capability to handle incoming messages. It also has ability to change its ownership in MP.&nbsp; Inherited classes must implement a getMessageLoop method which must return the MessageLoop object to which a message can be sent.</div></div>",260:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Sets initial ownership of the object</div></div>",261:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Deletes this MessageReceiver and deletes messages directed to it from its MessageLoop</div></div>",262:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Derived classes must implement this method if they need to receive messages.</div></div>",263:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Handles messages sent to this MessageReceiver. Called by MessageLoop inside its thread.</div></div>",264:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Posts a message into the MessageLoop of this object The object can exist on this machine or on another machine If it exists on another machine, it still must be represented on this machine, at least it must have the &quot;owner&quot; variable set properly.</div></div>",265:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns true if the message with given msgID was done A proper msgID must be provided. Always returns true for negative msgID.&nbsp; Warning: Returns proper result only once for given msgID</div></div>",266:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Parameters: _msgID _msgID - the message ID returned by postMessage.</div></div>",268:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Changes owner of a MessageReceiver.</div></div>",269:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Called on remote machine when an ownership change is in the process.</div></div>",270:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Must return a single value which can be deserialized by deserialize method to restore value of an object.</div></div>",271:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Takes the output of serialize and restores values of an object</div></div>",272:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Called on local machine when an ownership transfer is in the progress.&nbsp; If your class has objects that must be transfered through the same mechanism, you must handle transfer of ownership of such objects here.&nbsp; If transfer of all objects has happened properly, must return true.</div></div>"});