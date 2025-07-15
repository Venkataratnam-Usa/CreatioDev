namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("38292588-c710-4748-9253-e5de51a441bc");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a3a4fad9-b789-4099-9b82-145fa823ff9c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,111,219,48,12,189,23,232,127,224,124,178,129,64,73,175,237,86,96,9,178,33,64,145,14,137,219,203,176,131,34,51,174,6,89,50,36,57,89,86,244,191,79,31,78,234,196,198,80,30,4,139,124,124,226,123,166,164,21,154,154,50,132,28,181,166,70,109,45,153,41,185,229,101,163,169,229,74,94,95,93,95,189,250,3,92,52,134,203,18,214,7,99,177,186,59,79,118,219,171,74,201,255,148,53,146,185,180,220,114,52,31,67,145,249,14,165,125,7,255,12,133,67,200,62,112,55,140,68,157,174,217,11,86,116,233,244,192,23,72,158,140,94,33,21,246,144,100,191,142,109,117,179,17,156,1,19,212,24,136,213,1,34,184,133,41,53,56,80,57,242,156,236,232,144,170,157,27,157,23,8,59,197,11,120,148,107,186,115,130,82,181,249,141,204,130,65,89,160,30,65,36,157,226,214,169,11,212,95,117,105,0,179,46,225,25,187,143,141,155,134,156,24,143,84,152,221,93,2,35,59,232,160,204,153,144,198,68,22,91,122,240,2,25,175,168,128,90,115,230,61,139,125,228,59,218,252,80,99,49,83,162,169,228,51,21,13,126,110,161,247,169,247,245,135,199,39,253,231,249,22,210,200,117,15,55,147,99,100,151,176,158,62,31,72,22,102,70,37,67,129,133,27,197,234,6,3,255,16,214,88,237,119,197,237,173,161,37,230,88,213,130,90,47,64,226,30,30,20,163,130,255,165,27,129,235,128,75,91,89,79,6,181,91,108,233,126,135,219,106,178,66,163,26,205,28,72,105,199,50,26,122,200,199,251,34,197,29,76,70,144,244,222,48,36,216,180,48,185,82,83,94,198,91,146,145,92,181,51,100,31,20,227,68,196,4,249,166,116,69,109,122,33,210,61,126,67,38,83,88,44,87,3,63,192,135,125,209,106,31,156,152,255,97,88,123,173,71,146,126,195,91,55,113,186,132,143,112,140,199,48,110,3,150,143,249,252,147,143,182,208,49,161,157,249,54,228,207,156,104,177,97,99,12,84,110,235,221,128,84,194,235,228,13,168,187,72,101,129,10,161,246,88,252,3,22,197,24,43,137,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("5f502a1f-9897-a9f8-73e5-0f55ed31cb57"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("a3a4fad9-b789-4099-9b82-145fa823ff9c"),
				CreatedInSchemaUId = new Guid("38292588-c710-4748-9253-e5de51a441bc"),
				ModifiedInSchemaUId = new Guid("38292588-c710-4748-9253-e5de51a441bc")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("38292588-c710-4748-9253-e5de51a441bc"));
		}

		#endregion

	}

	#endregion

}

