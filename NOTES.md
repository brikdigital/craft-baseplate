# General

- Take a look at Craft 6 template and re-add the post-create-project-cmd stuff
- Re-add site-module
- All templates are probably broken; fix them

# Dependent on plugins

- Take a look at remaining fields where the type is Missing, these are plugin fields
- singleImage in videos entryType needs a show condition when displayMethod is popUp
- inlineVideo in videos entryType needs a show condition when displayMethod is autoplayPopUp
- inlineVideo in textMedia entryType needs a show condition when displayMethod is autoplayPopUp

# Reconciliation of project config

It should technically be possible to copy the current Craft 5 project config into this branch and
run a couple replacements to fix references:

```
sed -i '' 's/craft\\fields\\/CraftCms\\Cms\\Field\\/g' config/craft/project/**/*.yaml
sed -i '' 's/craft\\fieldlayoutelements\\CustomField/CraftCms\\Cms\\FieldLayout\\LayoutElements\\CustomField/g' config/craft/project/**/*.yaml
sed -i '' 's/craft\\fieldlayoutelements\\/CraftCms\\Cms\\FieldLayout\\LayoutElements\\/g' config/craft/project/**/*.yaml
# elementSources entries
sed -i '' 's/craft\\elements\\Entry/CraftCms\\Cms\\Entry\\Elements\\Entry/g' config/craft/project/project.yaml
sed -i '' 's/craft\\ckeditor\\Field/CraftCms\\Ckeditor\\Field/g' config/craft/project/**/*.yaml
```

Do note that a full pass (including resaves) over every field is necessary, as some property
names/structures have changed between 5/6, and thus the default values would be used when resaving.
In particular, be mindful of element/user conditions on field editability/visibility conditions, as
those aren't as simple as a text replace to migrate.
