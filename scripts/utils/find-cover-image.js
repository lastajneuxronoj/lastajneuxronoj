const fs = require("fs/promises");
const path = require("path");

const {
	COVERS_DIR,
	COVER_EXTENSIONS
} = require("../config");

async function findCoverImage(id) {

	for (const ext of COVER_EXTENSIONS) {

		const filePath =
			path.join(
				COVERS_DIR,
				`${id}.${ext}`
			);

		try {

			await fs.access(filePath);

			return `covers/${id}.${ext}`;

		}

		catch {}

	}

	return null;

}

module.exports = findCoverImage;