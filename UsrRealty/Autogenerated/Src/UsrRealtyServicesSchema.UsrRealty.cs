namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyServicesSchema

	/// <exclude/>
	public class UsrRealtyServicesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyServicesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyServicesSchema(UsrRealtyServicesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e92d2a65-6969-4ced-b293-065e7b540933");
			Name = "UsrRealtyServices";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a3a4fad9-b789-4099-9b82-145fa823ff9c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,43,47,202,44,73,85,168,204,47,45,82,112,86,86,72,206,79,73,85,200,72,45,74,85,228,229,50,4,2,0,15,117,52,126,30,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e92d2a65-6969-4ced-b293-065e7b540933"));
		}

		#endregion

	}

	#endregion

}

